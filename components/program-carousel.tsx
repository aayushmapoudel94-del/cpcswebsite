"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProgramCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      href: '/services#education-therapy',
      img: '/cpcs-building.jpg',
      eyebrow: 'Education Program',
      title: 'Specialized Learning Support',
      desc: 'Tailored classroom and therapy sessions designed to help each child learn with confidence.',
    },
    {
      href: '/services#education-therapy',
      img: '/therapy.jpg',
      eyebrow: 'Therapy Services',
      title: 'Hands-on Therapy and Care',
      desc: 'Our therapists work closely with children to build strength, communication, and everyday skills.',
    },
    {
      href: '/services#early-intervention',
      img: '/smile.jpg',
      eyebrow: 'Early Intervention',
      title: 'Child Development Support',
      desc: 'Early screening and personalized plans to support progress in communication and motor skills.',
    },
    {
      href: '/services#inclusive-play',
      img: '/playing.jpg',
      eyebrow: 'Inclusive Play',
      title: 'Social Skills Through Play',
      desc: 'Play-based learning and social activities that help children grow confident and connected.',
    },
  ];

  function scrollBy(delta: number) {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
  }

  function scrollByCard(direction: 'prev' | 'next') {
    if (!scrollerRef.current) return;
    const firstCard = scrollerRef.current.querySelector<HTMLAnchorElement>('a');
    const cardWidth = firstCard?.clientWidth ?? 280;
    const gap = 24; // approximate space between cards from gap-6
    const distance = cardWidth + gap;
    scrollBy(direction === 'next' ? distance : -distance);
  }

  return (
    <div className="py-16 px-6 md:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary mb-3">Education & Therapy</p>
          <h2 className="text-4xl font-bold text-foreground">Explore Our Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Slide through our programs to see how we support each child's learning and care.</p>
        </div>

        <button
          aria-label="Previous"
          onClick={() => scrollByCard('prev')}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-md hover:bg-primary/5 z-10"
        >
          ‹
        </button>

        <div ref={scrollerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 md:px-0 scrollbar-hide">
          {items.map((it, idx) => (
            <Link
              key={idx}
              href={it.href}
              className="group block min-w-[260px] shrink-0 snap-center overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-72">
                <Image src={it.img} alt={it.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-primary uppercase mb-2">{it.eyebrow}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={() => scrollByCard('next')}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-md hover:bg-primary/5 z-10"
        >
          ›
        </button>
      </div>
    </div>
  );
}
