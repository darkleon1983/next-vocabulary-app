import React from "react";
import { Header } from "./components/Header";
import Link from "next/link";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Английский для программиста
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Интерактивный тренажер для изучения технического английского с мгновенной проверкой
          </p>
          
          <Link 
            href="/TrainingPage"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            Начать тренировку
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          <article className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border animate-fade-in-up animation-delay-100">
            <p className="text-foreground text-lg leading-relaxed">
              <span className="text-primary font-semibold">Этот проект</span> создан для начинающих
              web-разработчиков, как инструмент для изучения английского языка. На
              начальном этапе развития программиста ему не нужно говорить на
              английском, но ему сильно облегчит жизнь способность на нем читать.
            </p>
          </article>

          <article className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
              Сколько слов нужно знать?
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              На разных ресурсах указываются разные цифры, на одном авторитетном сервисе для 
              русскоязычных программистов я нашел цифру <span className="font-code bg-secondary px-2 py-0.5 rounded text-primary">3000-4000</span> слов, 
              но на YouTube канале одного программиста из России, который работает в Европе, 
              я услышал очень оптимистичную цифру — <span className="font-code bg-secondary px-2 py-0.5 rounded text-primary">700</span> слов.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              И мне это количество слов кажется более правдоподобным. Важно понимать, что вам нужно 
              знать 700 специальных слов, часть из которых термины или слова из математики. 
              Имеется в виду, что человеку, хорошо освоившему школьную программу по английскому, 
              плюсом нужно выучить 700 слов и он сможет очень сносно понимать, что написано в 
              литературе по вашему языку программирования.
            </p>
          </article>

          <article className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border animate-fade-in-up animation-delay-300">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              Методика изучения
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Как выучить эти слова, а главное, как узнать, какие слова нужно учить? 
              Могу вам предложить свою методику, она называется <span className="italic text-primary">{'"берешь книгу и читаешь"'}</span>! 
              В процессе чтения пишешь перевод незнакомых слов прямо между строчек. 
              Если вы читаете с экрана, тогда придется вести таблицу в экселе.
            </p>
          </article>

          <article className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8 shadow-lg border border-primary/20 animate-fade-in-up animation-delay-400">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              Совет от автора
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Вы уже наверняка гуглили &quot;как учить слова на английском&quot; или что-то подобное. 
              Советую почитать статьи или книги Вячеслава Дубынина, он объясняет, как работает память.
            </p>
            <div className="mt-4 p-4 bg-card rounded-xl border border-border">
              <p className="text-sm text-muted-foreground mb-2">Оптимальные интервалы повторения:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">20 минут</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">8 часов</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">20 часов</span>
              </div>
            </div>
          </article>

          <div className="text-center py-8 animate-fade-in-up">
            <p className="text-lg text-foreground">
              <span className="text-primary font-semibold">Удачи</span> вам и спасибо, что пользуетесь моим сайтом!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
