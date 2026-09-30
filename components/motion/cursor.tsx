'use client';

import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

const TARGET = 'a, button, input, textarea, select, [role="button"]';
const SIZE = 30; // idle bracket square (corner boxes are 10px with a 10px gap)
const PAD = 4;

/**
 * Target cursor: four corner brackets that spin around a center dot while idle,
 * then stop and lock onto the bounds of any interactive element under the pointer.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const spring = { stiffness: 420, damping: 38, mass: 0.5 };
  const x = useSpring(-100, spring);
  const y = useSpring(-100, spring);
  const w = useSpring(SIZE, spring);
  const h = useSpring(SIZE, spring);
  const ml = useTransform(w, (n) => -n / 2);
  const mt = useTransform(h, (n) => -n / 2);
  const shown = useRef(false);
  const rotate = useMotionValue(0);
  const spin = useRef<ReturnType<typeof animate> | null>(null);
  const target = useRef<Element | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;
    setEnabled(true);
    document.documentElement.classList.add('custom-cursor');

    const startSpin = () => {
      spin.current?.stop();
      rotate.set(rotate.get() % 360);
      spin.current = animate(rotate, rotate.get() + 360, {
        duration: 2,
        ease: 'linear',
        repeat: Infinity,
      });
    };
    const stopSpin = () => {
      spin.current?.stop();
      // settle to the nearest upright angle
      const r = rotate.get();
      spin.current = animate(rotate, Math.round(r / 360) * 360, { duration: 0.25 });
    };
    startSpin();

    let raf = 0;
    const tick = () => {
      const el = target.current;
      if (el && document.contains(el)) {
        const r = el.getBoundingClientRect();
        x.set(r.left + r.width / 2);
        y.set(r.top + r.height / 2);
        w.set(r.width + PAD * 2);
        h.set(r.height + PAD * 2);
      } else {
        x.set(mx.get());
        y.set(my.get());
        w.set(SIZE);
        h.set(SIZE);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const move = (e: MouseEvent) => {
      if (!shown.current) {
        shown.current = true;
        x.jump(e.clientX);
        y.jump(e.clientY);
      }
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
      const t = (e.target as Element | null)?.closest?.(TARGET) ?? null;
      if (t !== target.current) {
        target.current = t;
        if (t) stopSpin();
        else startSpin();
      }
    };
    const leave = () => {
      shown.current = false;
      setVisible(false);
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      spin.current?.stop();
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.documentElement.classList.remove('custom-cursor');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const corner = 'absolute h-2.5 w-2.5 border-white';

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* center dot follows the pointer exactly */}
      <motion.span
        className="absolute left-0 top-0 h-1 w-1 -ml-0.5 -mt-0.5 rounded-full bg-white"
        style={{ x: mx, y: my }}
      />
      {/* brackets */}
      <motion.div className="absolute left-0 top-0" style={{ x, y }}>
        <motion.div
          className="relative"
          style={{
            width: w,
            height: h,
            marginLeft: ml,
            marginTop: mt,
            rotate,
          }}
        >
          <span className={`${corner} left-0 top-0 border-l-[3px] border-t-[3px]`} />
          <span className={`${corner} right-0 top-0 border-r-[3px] border-t-[3px]`} />
          <span className={`${corner} bottom-0 left-0 border-b-[3px] border-l-[3px]`} />
          <span className={`${corner} bottom-0 right-0 border-b-[3px] border-r-[3px]`} />
        </motion.div>
      </motion.div>
    </div>
  );
}
