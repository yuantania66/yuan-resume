"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  GraduationCap,
  Award,
  ChevronDown,
  ExternalLink,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Star,
  Brain,
  Database,
  Code,
  Zap,
  Cpu,
  Globe,
  MessageSquare,
} from "lucide-react"

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const handleScroll = () => {
      if (typeof window === 'undefined') return
      
      const sections = ["hero", "experience", "projects", "skills", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (typeof document !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "AI产品设计", level: 95 },
    { name: "需求分析", level: 90 },
    { name: "团队协作", level: 88 },
    { name: "Python/数据分析", level: 75 },
    { name: "项目管理", level: 85 },
    { name: "跨部门沟通", level: 92 },
  ]

  const workExperience = [
    {
      period: "2021.03-至今",
      company: "吉利系（亿咖通/寰福/研究院）",
      position: "大数据/AI产品经理",
      description:
        "主持车辆智能诊断数据应用开发，基于车联网中台数据构建机器学习模型，挖掘故障关联特征。设计实时交互接口，实现故障预警信息秒级推送，强化 AI 在车辆售后场景的落地价值。",
    },
    {
      period: "2018.09-2021.03",
      company: "同方威视科技江苏有限公司",
      position: "AI产品经理",
      description:
        "负责海关集装箱智能检查 AI 产品及智慧海关训练平台搭建。深度调研场景需求，推动 X 射线图像算法迭代优化，实现云边协同的现场模型更新；制定图像标注规范，培训内外部团队，优化人机作业模式，提升查验效率。",
    },
    {
      period: "2014.07-2018.09",
      company: "江苏飞搏软件股份有限公司",
      position: "前端工程师（兼任产品经理）",
      description:
        "参与政府数字平台项目，调研用户需求，提炼核心关注点，输出产品需求文档与原型；承担前端交互实现及网页制作，协同后台完成联调；全程跟进项目进度，保障顺利验收，助力平台用户体验优化与高效交付。",
    },
  ]

  const projects = [
    {
      id: "smart-customs",
      title: "智慧海关AI在线训练平台",
      period: "2020.01-2021.03",
      role: "AI产品经理",
      description:
        "牵头搭建智慧海关AI在线训练平台，聚焦非专业人员现场模型更新需求，通过云边协同架构实现全国海关数据联动，支撑过关智能检测，优化人机作业模式。",
      achievements: [
        "平台实现模型现场更新周期缩短 200%",
        "支持 20个地级海关接入",
        '优化 "人机结合" 模式，强化贸易安全防线',
      ],
      tags: ["AI训练平台", "云边协同", "数据管理"],
    },
    {
      id: "container-inspection",
      title: "多国海关大型集装箱设备智能检查产品",
      period: "2019.03-2021.03",
      role: "AI产品经理",
      description:
        "承担多国海关大型集装箱智能检查AI产品全生命周期管理，基于X射线透视图像技术破解现场判图压力大、通关效率低等痛点，落地多款AI产品并支撑全流程运维，推动海关查验智能化升级。",
      achievements: [
        "AI产品落地后，海关关员判图效率提升35%",
        "标准化方案已支撑7个国家海关应用",
        "优化人机协作模式，强化跨境贸易安全管控能力",
      ],
      tags: ["图像识别", "X射线技术", "国际化"],
    },
    {
      id: "vehicle-sentiment",
      title: "车辆舆情分析系统",
      period: "2024.09-2024.11",
      role: "AI产品经理",
      description:
        "负责汽车行业车辆舆情分析系统打造，整合多渠道舆情数据，通过智能化分析工具实现舆情动态监测与挖掘，为车企、经销商等提供决策支持，助力把握市场反馈与用户需求。",
      achievements: [
        "提升舆情信息采集效率，为多家品牌提供精准舆情洞察",
        "分析舆情的情感属性助力产品迭代与市场策略优化",
        "增强用户满意度",
      ],
      tags: ["舆情分析", "情感分析", "数据挖掘"],
    },
    {
      id: "vehicle-data-platform",
      title: "车联网数据中台",
      period: "2021.03-2021.08",
      role: "大数据产品经理",
      description:
        "负责基于阿里云技术栈（Kafka、Flink等）搭建车联网数据中台，整合车辆联网及业务数据，解决性能与扩展难题。通过数仓分层与湖可回溯设计，支撑车辆全生命周期管理，为AI驱动的业务决策提供数据底座。",
      achievements: [
        "支撑日活 80W+ 车辆、日增 1.5 亿条数据处理",
        "数据质量评估体系使异常数据识别效率全面覆盖",
        "为车辆质量优化与服务升级提供了数据支撑",
      ],
      tags: ["数据中台", "实时计算", "数据治理"],
    },
    {
      id: "smart-test-drive",
      title: "智能试乘试驾系统",
      period: "2024.12-2025.03",
      role: "AI产品经理",
      description:
        "参与智能试乘试驾系统研发，整合四大核心模块构建闭环体验。通过车机端路线创建与亮点绑定机制，结合数据关联技术解决信息碎片化问题，支撑试乘场景下的智能信息传递，助力车型价值精准触达用户。",
      achievements: [
        "系统实现试乘路线创建效率提升",
        "提升有试驾用户的体验，缩短用户决策周期",
        "强化试乘场景的转化价值",
      ],
      tags: ["智能驾驶", "用户体验", "数据关联"],
    },
    {
      id: "network-analysis",
      title: "车联网网络分析系统",
      period: "2025.02-2025.03",
      role: "产品经理",
      description:
        "负责车联网网络分析系统搭建，聚焦车辆移动过程中的网络信号数据（PCI、RSRP 等），通过 AI 驱动的分析模型挖掘网络特征，支撑小区切换优化与网络质量评估，助力提升车辆联网稳定性及用户体验。",
      achievements: ["形成的网络分析方法论", "为后续车联网服务优化提供了数据驱动的决策依据", "实现网络切换优化"],
      tags: ["网络分析", "信号优化", "AI驱动"],
    },
  ]

  return (
    <div className="min-h-screen bg-background tech-grid relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold tech-gradient-text">袁媛媛</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "首页" },
                { id: "experience", label: "工作经历" },
                { id: "projects", label: "项目经验" },
                { id: "skills", label: "技能特长" },
                { id: "about", label: "关于我" },
                { id: "contact", label: "联系方式" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    isClient && activeSection === item.id ? "tech-text" : "tech-text-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-6 relative">
        {/* 科技装饰元素 */}
        {isClient && (
          <>
            <div className="absolute top-20 left-10 tech-float">
              <Cpu className="w-8 h-8 text-white/50 tech-pulse" />
            </div>
            <div className="absolute top-40 right-20 tech-float">
              <Zap className="w-6 h-6 text-white/50 tech-pulse" />
            </div>
            <div className="absolute bottom-20 left-1/4 tech-float">
              <Globe className="w-6 h-6 text-white/50 tech-pulse" />
            </div>
          </>
        )}
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-balance">
                <span className="tech-text">袁媛媛</span>
                <br />
                <span className="tech-gradient-text">AI产品经理</span>
              </h1>
              <p className="text-xl md:text-2xl tech-text-secondary max-w-3xl mx-auto text-balance">
                8年AI/大数据产品经验 · 专注智能化产品落地与团队协作
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm tech-text-secondary">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                15851817312
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                15851817312@163.com
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-white" />
                东南大学成贤学院 · 计算机科学与技术
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button onClick={() => scrollToSection("about")} size="lg" className="tech-button">
                了解更多
                <ChevronDown className="w-4 h-4 ml-2 text-white" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("contact")} size="lg" className="tech-border">
                联系我
                <ExternalLink className="w-4 h-4 ml-2 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 tech-gradient-text">工作经历</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="tech-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-48 flex-shrink-0">
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <Calendar className="w-4 h-4 text-white" />
                        {job.period}
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {job.position}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 tech-text">{job.company}</h3>
                      <p className="tech-text-secondary leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 tech-gradient-text">核心项目经验</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 max-w-4xl mx-auto">
                <CardHeader>
                  <div>
                    <CardTitle className="text-lg mb-2 tech-text">{project.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm tech-text-secondary mb-3">
                      <span>{project.period}</span>
                      <Badge variant="outline">{project.role}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs hover:scale-105 transition-transform border border-white/20 bg-white/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="tech-text-secondary mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-3">
                    <Separator />
                    <h4 className="font-medium text-sm gradient-text">主要成果：</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm tech-text-secondary">
                          <Star className="w-3 h-3 text-white mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 tech-gradient-text">技能特长</h2>
          
          <div className="space-y-12">
            {/* 左侧：核心技能 */}
            <div>
              <h3 className="text-xl font-semibold mb-6 tech-text">核心技能</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <Card key={skill.name} className="tech-card hover:scale-105 transition-all duration-300 flex-1 min-w-[280px]">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm tech-text">{skill.name}</div>
                          <div className="text-xs tech-text-secondary">{skill.level}%</div>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-1.5" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-sm"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 右侧：技术工具和专业认证 */}
            <div className="space-y-8">
              {/* 上边模块：技术工具 */}
              <div>
                <h3 className="text-xl font-semibold mb-6 tech-text">技术工具</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-3 tech-text-secondary">产品设计</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform tech-border">XMind</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform tech-border">Axure</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform tech-border">PRD</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform tech-border">PPT</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-3 tech-text-secondary">技术开发</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform tech-border">Docker</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform tech-border">Linux</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform tech-border">Python</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform tech-border">数据分析</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下边模块：专业认证 */}
              <div>
                <h3 className="text-xl font-semibold mb-6 tech-text">专业认证</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm tech-text">人工智能应用工程师（高级）</div>
                      <div className="text-xs tech-text-secondary">专业技能认证</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm tech-text">大数据分析师（高级）</div>
                      <div className="text-xs tech-text-secondary">数据分析专业认证</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm tech-text">英语六级</div>
                      <div className="text-xs tech-text-secondary">具备无障碍读写能力</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 tech-gradient-text">自我评价</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              <Card className="group tech-card hover:scale-105 transition-all duration-300 flex-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="tech-text">产品攻坚能力</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="tech-text-secondary">
                    深耕产品领域8年，擅长理解用户需求与痛点，能输出针对性解决方案，熟练掌握需求分析、原型设计及文档撰写全流程，保障产品落地质量。
                  </p>
                </CardContent>
              </Card>

              <Card className="group tech-card hover:scale-105 transition-all duration-300 flex-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="tech-text">团队协同能力</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="tech-text-secondary">
                    具备项目管理与研发经验，擅长联动研发、算法团队对齐需求，善于跨部门沟通协作，精准评估技术可行性，在需求层面严格把控，高效推动项目闭环。
                  </p>
                </CardContent>
              </Card>

              <Card className="group tech-card hover:scale-105 transition-all duration-300 flex-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="tech-text">持续学习提升</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="tech-text-secondary">
                    拥有强自驱力与自主学习能力，积极向上且责任心强，助力高效达成团队目标。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white/5 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 tech-gradient-text">联系方式</h2>
          <p className="text-lg tech-text-secondary mb-12">期待与您探讨AI产品的无限可能</p>

          <div className="space-y-6 max-w-2xl mx-auto">
            {/* 电话 */}
            <Card className="tech-card hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg mb-1 tech-text">电话</div>
                    <div className="tech-text-secondary text-lg">15851817312</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 邮箱 */}
            <Card className="tech-card hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg mb-1 tech-text">邮箱</div>
                    <div className="tech-text-secondary text-lg">15851817312@163.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 微信二维码 */}
            <Card className="tech-card hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg mb-4 tech-text">微信</div>
                    {/* 微信二维码占位符 */}
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto shadow-lg tech-glow">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center tech-text-secondary">
          <p>&copy; 2025 袁媛媛. 专注AI产品创新与落地.</p>
        </div>
      </footer>
    </div>
  )
}
