
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef } from "react";

export default function Index() {
  const featuresSectionRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Навигация */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="BookOpen" className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold text-purple-500">Learning Buddy</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-purple-500">Главная</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-purple-500">Возможности</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-purple-500">Уроки</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-purple-500">Поддержка</a>
          </nav>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Войти</Button>
            <Button size="sm" className="bg-purple-500 hover:bg-purple-600">Начать</Button>
          </div>
        </div>
      </header>

      {/* Герой-секция */}
      <section className="py-20 md:py-32 container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Изучайте английский <span className="text-purple-500 font-extrabold">весело</span> и <span className="text-purple-500 font-extrabold">доступно</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Индивидуальный подход для школьников с особыми образовательными потребностями. Делаем обучение английскому языку понятным и увлекательным!
            </p>
            <div className="flex gap-4">
              <Button onClick={scrollToFeatures} className="bg-purple-500 hover:bg-purple-600">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Попробовать бесплатно
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop"
              alt="Школьники изучают английский" 
              className="rounded-lg shadow-lg max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Секция с преимуществами */}
      <section ref={featuresSectionRef} className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learning Buddy предлагает уникальные инструменты для эффективного обучения с учетом индивидуальных особенностей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-purple-500">
              <CardHeader>
                <div className="p-2 rounded-full bg-purple-100 w-fit">
                  <Icon name="BookOpenCheck" className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="mt-4">Адаптивное обучение</CardTitle>
                <CardDescription>
                  Программа подстраивается под индивидуальный темп и стиль обучения каждого ученика
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-blue-400">
              <CardHeader>
                <div className="p-2 rounded-full bg-blue-100 w-fit">
                  <Icon name="Medal" className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="mt-4">Система мотивации</CardTitle>
                <CardDescription>
                  Награды, достижения и персонализированная обратная связь для поддержания интереса
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-orange-400">
              <CardHeader>
                <div className="p-2 rounded-full bg-orange-100 w-fit">
                  <Icon name="Headphones" className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle className="mt-4">Мультисенсорный подход</CardTitle>
                <CardDescription>
                  Визуальные, аудио и интерактивные материалы для улучшения восприятия и запоминания
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-green-400">
              <CardHeader>
                <div className="p-2 rounded-full bg-green-100 w-fit">
                  <Icon name="LineChart" className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="mt-4">Отслеживание прогресса</CardTitle>
                <CardDescription>
                  Подробная статистика и анализ успеваемости для учеников, родителей и учителей
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-red-400">
              <CardHeader>
                <div className="p-2 rounded-full bg-red-100 w-fit">
                  <Icon name="Users" className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="mt-4">Поддержка сообщества</CardTitle>
                <CardDescription>
                  Форумы и чаты для общения с преподавателями и другими учениками
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-yellow-400">
              <CardHeader>
                <div className="p-2 rounded-full bg-yellow-100 w-fit">
                  <Icon name="Smile" className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="mt-4">Игровые элементы</CardTitle>
                <CardDescription>
                  Увлекательные задания и мини-игры для закрепления материала в интересной форме
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция с учебными модулями */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Учебные модули</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Специально разработанные модули с учетом различных образовательных потребностей
            </p>
          </div>

          <Tabs defaultValue="beginner" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">Начальный</TabsTrigger>
              <TabsTrigger value="intermediate">Средний</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
            </TabsList>
            <TabsContent value="beginner" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Начальный уровень</CardTitle>
                  <CardDescription>
                    Базовые концепции и простые языковые конструкции
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-purple-100 rounded-full">
                      <Icon name="BookA" className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Алфавит и фонетика</h4>
                      <p className="text-sm text-gray-600">Изучение букв и их звучания через интерактивные упражнения</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
                      <Icon name="MessageSquare" className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Базовые приветствия</h4>
                      <p className="text-sm text-gray-600">Простые диалоги и фразы для повседневного общения</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-full">
                      <Icon name="ListTodo" className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Простые слова и выражения</h4>
                      <p className="text-sm text-gray-600">Основной словарный запас с визуальной поддержкой</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="intermediate" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Средний уровень</CardTitle>
                  <CardDescription>
                    Расширенная грамматика и словарный запас для повседневного общения
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-orange-100 rounded-full">
                      <Icon name="GanttChart" className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Времена и грамматика</h4>
                      <p className="text-sm text-gray-600">Изучение времен и основных грамматических структур</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-full">
                      <Icon name="MessagesSquare" className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Беседы на различные темы</h4>
                      <p className="text-sm text-gray-600">Практика разговорной речи в контексте повседневных ситуаций</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-pink-100 rounded-full">
                      <Icon name="BookText" className="h-5 w-5 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Понимание текстов</h4>
                      <p className="text-sm text-gray-600">Чтение и анализ текстов среднего уровня сложности</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advanced" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Продвинутый уровень</CardTitle>
                  <CardDescription>
                    Сложные языковые конструкции и углубленная практика
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-cyan-100 rounded-full">
                      <Icon name="FileText" className="h-5 w-5 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Академическое письмо</h4>
                      <p className="text-sm text-gray-600">Структурированные эссе и другие форматы академических текстов</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-violet-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-violet-100 rounded-full">
                      <Icon name="Mic" className="h-5 w-5 text-violet-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Дебаты и презентации</h4>
                      <p className="text-sm text-gray-600">Развитие навыков публичных выступлений и дискуссий</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-amber-100 rounded-full">
                      <Icon name="Globe" className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Культурный контекст</h4>
                      <p className="text-sm text-gray-600">Погружение в культурные особенности англоязычных стран</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Секция поддержки */}
      <section className="py-20 bg-purple-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Поддержка учеников</h2>
              <p className="text-lg text-gray-600">
                Мы всегда готовы помочь с любыми вопросами и сложностями в обучении
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="MessageCircle" className="h-5 w-5 text-purple-500" />
                      <h3 className="font-medium text-lg">Чат с преподавателем</h3>
                    </div>
                    <p className="text-gray-600">
                      Получите немедленную помощь от квалифицированных преподавателей английского языка в режиме реального времени.
                    </p>
                    <Button className="w-full md:w-auto">Задать вопрос</Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="VideoIcon" className="h-5 w-5 text-purple-500" />
                      <h3 className="font-medium text-lg">Видео-консультации</h3>
                    </div>
                    <p className="text-gray-600">
                      Запишитесь на персональную видео-консультацию для разбора сложных тем и вопросов.
                    </p>
                    <Button variant="outline" className="w-full md:w-auto">Забронировать время</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h3 className="font-medium text-lg">Часто задаваемые вопросы</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Как начать занятия на платформе?</h4>
                    <p className="text-gray-600 mt-2">
                      Просто зарегистрируйтесь, пройдите короткий тест для определения вашего уровня, и система предложит персонализированный план обучения.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Можно ли заниматься с мобильного устройства?</h4>
                    <p className="text-gray-600 mt-2">
                      Да, наша платформа полностью адаптирована для мобильных устройств, что позволяет учиться в любом удобном месте.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Как родителям отслеживать прогресс ребенка?</h4>
                    <p className="text-gray-600 mt-2">
                      В личном кабинете родителя доступна подробная статистика занятий, успехи, проблемные зоны и рекомендации для дополнительной практики.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать свой путь к свободному владению английским?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам школьников, которые уже улучшили свои знания с Learning Buddy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-500">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="BookOpen" className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">Learning Buddy</span>
              </div>
              <p className="text-sm">
                Образовательная платформа, делающая изучение английского языка доступным для всех школьников
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400">Главная</a></li>
                <li><a href="#" className="hover:text-purple-400">О нас</a></li>
                <li><a href="#" className="hover:text-purple-400">Возможности</a></li>
                <li><a href="#" className="hover:text-purple-400">Уроки</a></li>
                <li><a href="#" className="hover:text-purple-400">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>support@learningbuddy.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (800) 123-45-67</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-4">Подписаться</h4>
              <p className="text-sm mb-4">Получайте новости и обновления</p>
              <form className="flex gap-2">
                <input 
                  type="email"
                  placeholder="Ваш email"
                  className="px-3 py-2 text-sm rounded bg-gray-800 border border-gray-700 flex-1 text-white"
                />
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© 2025 Learning Buddy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
