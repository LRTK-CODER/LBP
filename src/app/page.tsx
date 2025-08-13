"use client";

import { Button, Card, CardHeader, CardBody, Chip, Alert } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-default-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-6">
            LBP
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground-600 mb-4">
            LRTK Blog Platform
          </h2>
          <p className="text-lg text-foreground-500 mb-8 max-w-2xl mx-auto">
            Next.js 기반의 모던 블로그 플랫폼 - HeroUI + React Bits, Obsidian 친화적 CMS, 실시간 미리보기
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              as={Link}
              href="/cms" 
              size="lg" 
              color="primary" 
              variant="shadow"
            >
              CMS 시작하기
            </Button>
            <Button 
              as={Link}
              href="/blog" 
              size="lg" 
              variant="bordered"
            >
              블로그 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">주요 기능</h3>
        <div className="grid gap-6 max-w-4xl mx-auto">
          <Alert 
            color="primary" 
            variant="faded"
            title="🎨 모던 디자인"
            description="HeroUI 기반의 아름다운 UI와 React Bits의 인터랙티브 컴포넌트"
            className="p-6"
          />
          
          <Alert 
            color="success" 
            variant="faded"
            title="📝 직관적인 CMS"
            description="Obsidian 친화적인 마크다운 에디터와 실시간 미리보기"
            className="p-6"
          />
          
          <Alert 
            color="warning" 
            variant="faded"
            title="🚀 자동 배포"
            description="GitHub Pages 연동으로 원클릭 배포"
            className="p-6"
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">기술 스택</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          <Chip color="primary" variant="solid">Next.js 14</Chip>
          <Chip color="secondary" variant="solid">TypeScript</Chip>
          <Chip color="success" variant="solid">Tailwind CSS</Chip>
          <Chip color="warning" variant="solid">HeroUI</Chip>
          <Chip color="danger" variant="solid">React Bits</Chip>
          <Chip color="default" variant="solid">Framer Motion</Chip>
        </div>
        
        {/* HeroUI Test */}
        <div className="mt-8 p-4 bg-red-500 text-white text-center rounded-lg">
          <p>Tailwind CSS 테스트: 이 박스가 빨간색이면 Tailwind가 작동 중</p>
        </div>
      </section>
    </div>
  );
}
