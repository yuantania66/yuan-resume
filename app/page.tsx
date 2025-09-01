"use client"

import { useState, useEffect } from "react"

// 类型定义
interface WorkExperience {
  period: string
  company: string
  position: string
  description: string
  projectTags?: string[]
}

interface Project {
  id: string
  title: string
  period: string
  role: string
  description: string
  achievements: string[]
  tags: string[]
}
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
  ArrowLeft,
} from "lucide-react"

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // 页面初始化时，延迟打印核心项目中所有项目的位置信息
    // 延迟确保 DOM 完全渲染完成
    setTimeout(() => {
      console.log('=== 页面初始化 - 核心项目位置信息 (延迟1秒) ===')
      projects.forEach((project) => {
        const projectElement = document.getElementById(`project-${project.id}`)
        if (projectElement) {
          console.log(`项目: ${project.title}`)
          console.log(`  - 项目ID: ${project.id}`)
          console.log(`  - 顶部位置: ${projectElement.offsetTop}px`)
          console.log(`  - 项目高度: ${projectElement.offsetHeight}px`)
          console.log(`  - 底部位置: ${projectElement.offsetTop + projectElement.offsetHeight}px`)
          console.log(`  - 元素可见性: ${projectElement.offsetHeight > 0 ? '可见' : '不可见'}`)
          console.log('---')
        } else {
          console.log(`项目: ${project.title} - 元素未找到`)
        }
      })
      
      // 打印页面整体信息
      console.log('=== 页面整体信息 ===')
      console.log(`页面总高度: ${document.documentElement.scrollHeight}px`)
      console.log(`视窗高度: ${window.innerHeight}px`)
      console.log(`当前滚动位置: ${window.pageYOffset}px`)
    }, 1000)
    
    const handleScroll = () => {
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
    const element = document.getElementById(sectionId)
    if (element) {
      // 使用 getBoundingClientRect() 获取元素相对于页面的绝对位置
      const rect = element.getBoundingClientRect()
      const elementTop = window.pageYOffset + rect.top // 元素相对于页面顶部的绝对位置
      const navHeight = 80 // 导航栏高度
      const offset = 0 // 偏移量设为0px
      
      // 滚动到计算后的目标位置
      window.scrollTo({
        top: elementTop - navHeight - offset,
        behavior: "smooth"
      })
    }
  }

  // 从项目卡片返回到对应的工作经历卡片
  const scrollToWorkExperience = (projectTitle: string) => {
    console.log('=== scrollToWorkExperience 函数开始 ===')
    console.log('点击了返回按钮，项目标题:', projectTitle)
    
    // 查找包含该项目的工作经历及其索引
    const workExpIndex = workExperience.findIndex(job => job.projectTags && job.projectTags.includes(projectTitle))

    if (workExpIndex !== -1) {
      console.log('找到对应的工作经历索引:', workExpIndex)
      // 滚动到对应的工作经历卡片
      const workExpCard = document.getElementById(`workexp-${workExpIndex}`)
      if (workExpCard) {
        const rect = workExpCard.getBoundingClientRect()
        const elementTop = window.pageYOffset + rect.top
        const navHeight = 80
        const offset = 0
        console.log('滚动到工作经历卡片，目标位置:', elementTop - navHeight - offset)
        window.scrollTo({
          top: elementTop - navHeight - offset,
          behavior: "smooth"
        })
      }
    } else {
      console.log('未找到对应的工作经历，滚动到工作经历区域')
      const experienceSection = document.getElementById('experience')
      if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: "smooth" })
      }
    }
    
    console.log('=== scrollToWorkExperience 函数完成 ===')
  }

  // 项目名称到项目ID的映射
  const projectNameToId: { [key: string]: string } = {
    "车辆舆情分析系统": "vehicle-sentiment",
    "车联网数据中台": "vehicle-data-platform",
    "智能试乘试驾系统": "smart-test-drive",
    "车联网网络分析系统": "network-analysis",
    "智慧海关AI在线训练平台": "smart-customs",
    "多国海关大型集装箱设备智能检查产品": "container-inspection"
  }

  const scrollToProject = (projectName: string) => {
    console.log('=== scrollToProject 函数开始 ===')
    console.log('点击了项目按钮:', projectName)
    const projectId = projectNameToId[projectName]
    console.log('映射的项目ID:', projectId)
    
    if (!projectId) {
      console.log('项目ID未找到')
      // 如果项目名称未映射，跳转到项目区域
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        console.log('跳转到项目区域')
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
      return
    }
    
    // 查找核心项目经验区域中的具体项目元素
    const projectElement = document.getElementById(`project-${projectId}`)
    console.log('找到的项目元素:', projectElement)
    console.log('项目元素ID:', `project-${projectId}`)
    
    if (projectElement) {
      // 点击项目按钮后，重新计算并打印对应项目的顶部位置信息
      console.log('=== 点击后重新计算的项目位置信息 ===')
      console.log(`项目名称: ${projectName}`)
      console.log(`项目ID: ${projectId}`)
      console.log(`项目元素: ${projectElement ? '找到' : '未找到'}`)
      
      // 使用 getBoundingClientRect() 获取元素相对于视窗的绝对位置
      const rect = projectElement.getBoundingClientRect()
      const elementTop = window.pageYOffset + rect.top // 元素相对于页面顶部的绝对位置
      const elementHeight = projectElement.offsetHeight
      const elementBottom = elementTop + elementHeight
      const currentScrollTop = window.pageYOffset
      
      console.log(`项目元素相对于视窗的顶部位置: ${rect.top}px`)
      console.log(`项目元素相对于页面顶部的绝对位置: ${elementTop}px`)
      console.log(`项目高度: ${elementHeight}px`)
      console.log(`项目底部位置: ${elementBottom}px`)
      console.log(`当前滚动位置: ${currentScrollTop}px`)
      console.log(`页面总高度: ${document.documentElement.scrollHeight}px`)
      console.log(`视窗高度: ${window.innerHeight}px`)
      
      // 检查计算出的滚动位置是否合理
      if (elementTop < 100) {
        console.log('⚠️ 警告：项目位置异常，elementTop < 100px，可能导致跳转到hero区域')
        console.log('项目元素可能还没有完全渲染，尝试延迟执行滚动...')
        
        // 延迟执行滚动，确保元素完全渲染
        setTimeout(() => {
          const delayedRect = projectElement.getBoundingClientRect()
          const delayedElementTop = window.pageYOffset + delayedRect.top
          console.log(`延迟后的项目绝对位置: ${delayedElementTop}px`)
          
          if (delayedElementTop > 100) {
            const targetScrollTop = delayedElementTop - 80 - 0
            console.log(`延迟滚动到目标位置: ${targetScrollTop}px`)
            window.scrollTo({
              top: targetScrollTop,
              behavior: "smooth"
            })
          } else {
            console.log('延迟后位置仍然异常，跳转到项目区域')
            const projectsSection = document.getElementById('projects')
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" })
            }
          }
        }, 100)
        return
      }
      
      // 计算滚动目标位置，考虑顶部导航栏高度
      const navHeight = 80 // 导航栏高度
      const offset = 0 // 偏移量设为0px
      
      let targetScrollTop
      if (Math.abs(currentScrollTop - elementTop) < 10) {
        // 当前位置接近目标位置，先滚动到元素上方80px
        targetScrollTop = elementTop - navHeight - offset - 80
        console.log(`当前位置接近目标，先滚动到元素上方80px，目标位置: ${targetScrollTop}px`)
      } else {
        // 正常滚动到目标位置，考虑导航栏高度
        targetScrollTop = elementTop - navHeight - offset
        console.log(`正常滚动到项目顶部，目标位置: ${targetScrollTop}px`)
      }
      
      // 滚动到计算后的目标位置
      console.log('开始滚动到核心项目经验中的对应项目位置...')
      window.scrollTo({
        top: targetScrollTop,
        behavior: "smooth"
      })
      
      // 如果先滚动到了上方，延迟后滚动到最终位置
      if (Math.abs(currentScrollTop - elementTop) < 10) {
        setTimeout(() => {
          console.log('延迟滚动到最终位置...')
          const finalTargetScrollTop = elementTop - navHeight - offset
          window.scrollTo({
            top: finalTargetScrollTop,
            behavior: "smooth"
          })
        }, 300)
      }
      
      // 添加高亮效果
      console.log('添加高亮效果')
      projectElement.classList.add('highlight-project')
      setTimeout(() => {
        projectElement.classList.remove('highlight-project')
        console.log('移除高亮效果')
      }, 2000)
      
      console.log('=== scrollToProject 函数完成 ===')
    } else {
      console.log('找不到项目元素，跳转到项目区域')
      // 如果找不到具体项目，跳转到项目区域
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }



  const skills = [
    { name: "AI产品设计", level: 95 },
    { name: "需求分析", level: 90 },
    { name: "团队协作", level: 88 },
    { name: "数据分析", level: 85 },
    { name: "项目管理", level: 75 },
    { name: "跨部门沟通", level: 92 },
  ]

  const workExperience: WorkExperience[] = [
    {
      period: "2021.03-至今",
      company: "吉利系（亿咖通/寰福/研究院）",
      position: "大数据/AI产品经理",
      description:
        "主持车辆智能诊断数据应用开发，基于车联网中台数据构建机器学习模型，挖掘故障关联特征。设计实时交互接口，实现故障预警信息秒级推送，强化 AI 在车辆售后场景的落地价值。",
      projectTags: ["车辆舆情分析系统", "车联网数据中台", "智能试乘试驾系统", "车联网网络分析系统"],
    },
    {
      period: "2018.09-2021.03",
      company: "同方威视科技江苏有限公司",
      position: "AI产品经理",
      description:
        "负责海关集装箱智能检查 AI 产品及智慧海关训练平台搭建。深度调研场景需求，推动 X 射线图像算法迭代优化，实现云边协同的现场模型更新；制定图像标注规范，培训内外部团队，优化人机作业模式，提升查验效率。",
      projectTags: ["智慧海关AI在线训练平台", "多国海关大型集装箱设备智能检查产品"],
    },
    {
      period: "2014.07-2018.09",
      company: "江苏飞搏软件股份有限公司",
      position: "前端工程师（兼任产品经理）",
      description:
        "参与政府数字平台项目，调研用户需求，提炼核心关注点，输出产品需求文档与原型；承担前端交互实现及网页制作，协同后台完成联调；全程跟进项目进度，保障顺利验收，助力平台用户体验优化与高效交付。",
    },
  ]

  const projects: Project[] = [
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold rainbow-white">个人简历</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "首页" },
                { id: "experience", label: "工作经历" },
                { id: "projects", label: "项目经验" },
                { id: "skills", label: "技能特长" },
                { id: "about", label: "自我评价" },
                { id: "contact", label: "联系方式" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium nav-item ${
                    mounted && activeSection === item.id ? "nav-active" : "tech-text-secondary"
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
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
        {/* 科技装饰元素 */}
        {mounted && (
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
        
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-balance">
                <span className="hero-name">袁媛媛</span>
                <span className="text-white"> · </span>
                <span className="text-white">AI产品经理</span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto text-balance">
                8年AI/大数据产品经验
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="hero-contact-item">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/70" />
                  <span className="hero-contact-text">158-5181-7312</span>
                </div>
              </div>
              <div className="hero-contact-item">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/70" />
                  <span className="hero-contact-text">15851817312@163.com</span>
                </div>
              </div>
              <div className="hero-contact-item">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-white/70" />
                  <span className="hero-contact-text">东南大学成贤学院 · 计算机科学与技术</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 section-title">工作经历</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} id={`workexp-${index}`} className="tech-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-48 flex-shrink-0">
                      <div className="flex items-center gap-2 text-white font-medium mb-2">
                        <Calendar className="w-4 h-4 text-white" />
                        {job.period}
                      </div>
                      <Badge variant="outline" className="mb-2 job-position">
                        {job.position}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 company-name">{job.company}</h3>
                      <p className="text-white leading-relaxed mb-4">{job.description}</p>
                      {job.projectTags && (
                        <div className="flex flex-wrap gap-2">
                          {job.projectTags.map((tag) => (
                            <Button 
                              key={tag} 
                              variant="outline" 
                              size="sm" 
                              className="text-xs hover:scale-105 transition-transform project-tag"
                              onClick={() => scrollToProject(tag)}
                            >
                              {tag}
                            </Button>
                          ))}
                        </div>
                      )}
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
          <h2 className="text-3xl font-bold text-center mb-12 section-title">核心项目经验</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} id={`project-${project.id}`} className="project-card hover:scale-105 transition-all duration-300 relative">
                {/* 光扫效果元素 */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-500 pointer-events-none z-10 transform -translate-x-full hover:translate-x-full"></div>
                <CardHeader>
                    <div>
                    <CardTitle className="text-lg mb-2 project-title text-justify">{project.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="project-period text-justify">{project.period}</span>
                      <Badge variant="outline" className="project-role">{project.role}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs hover:scale-105 transition-transform project-skill-tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="project-description mb-4 leading-relaxed text-justify">{project.description}</p>

                  <div className="space-y-3">
                      <Separator />
                    <h4 className="font-medium text-sm project-achievements-title text-justify">主要成果：</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm project-achievement-item text-justify">
                          <Star className="w-3 h-3 text-white mt-1 flex-shrink-0" />
                          <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    
                    {/* 返回工作经历按钮 */}
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs hover:scale-105 transition-transform project-return-btn"
                        onClick={() => scrollToWorkExperience(project.title)}
                      >
                        <ArrowLeft className="w-3 h-3 mr-1" />
查看相关经历
                      </Button>
                    </div>
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
          <h2 className="text-3xl font-bold text-center mb-8 section-title">技能特长</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左侧：核心技能 */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6 section-title">核心技能</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const getIcon = (skillName: string) => {
                    switch (skillName) {
                      case "AI产品设计":
                        return <Target className="w-5 h-5 text-white" />
                      case "需求分析":
                        return <Brain className="w-5 h-5 text-white" />
                      case "团队协作":
                        return <Users className="w-5 h-5 text-white" />
                      case "数据分析":
                        return <Database className="w-5 h-5 text-white" />
                      case "项目管理":
                        return <TrendingUp className="w-5 h-5 text-white" />
                      case "跨部门沟通":
                        return <MessageSquare className="w-5 h-5 text-white" />
                      default:
                        return <Brain className="w-5 h-5 text-white" />
                    }
                  }
                  
                  return (
                    <Card key={skill.name} className="tech-card hover:scale-105 transition-all duration-300">
                      <CardContent className="p-2 mb-2">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 flex items-center justify-center">
                            {getIcon(skill.name)}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-white">{skill.name}</div>
                          </div>
                          <div className="text-sm text-white">
                            <span className="text-lg font-semibold">{skill.level}</span>
                            <span className="text-xs">%</span>
                          </div>
                    </div>
                        <div className="relative">
                          <Progress value={skill.level} className="h-2.5 skill-progress" />
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-sm"></div>
                  </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* 右侧：技术工具和技术证书 */}
            <div className="space-y-8">
              {/* 上边模块：技术工具 */}
            <div>
                <h3 className="text-xl font-semibold mb-6 section-title">技术工具</h3>
              <div className="space-y-4">
                      <div>
                    <h4 className="font-medium text-sm mb-3 text-white">产品设计</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform text-white border-[0.5px] border-white/50">XMind</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform text-white border-[0.5px] border-white/50">Axure</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform text-white border-[0.5px] border-white/50">cursor</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform text-white border-[0.5px] border-white/50">PPT</Badge>
                    </div>
                      </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-3 text-white">技术开发</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform text-white border-[0.5px] border-white/50">Python</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform text-white border-[0.5px] border-white/50">SQL语言</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform text-white border-[0.5px] border-white/50">Linux</Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm hover:scale-105 transition-transform text-white border-[0.5px] border-white/50">Docker</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下边模块：技术证书 */}
              <div>
                <h3 className="text-xl font-semibold mb-6 section-title">技术证书</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                      <div>
                      <div className="font-medium text-sm text-white">人工智能应用工程师（高级）</div>
                    </div>
                  </div>

                    <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                      <div>
                      <div className="font-medium text-sm text-white">大数据分析师（高级）</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-white">英语六级</div>
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
          <h2 className="text-3xl font-bold text-center mb-12 section-title">自我评价</h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <Card className="group tech-card hover:scale-105 transition-all duration-300 flex-1">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="about-title-emphasis">产品攻坚能力</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-justify">
                    深耕产品领域8年，擅长理解用户需求与痛点，能输出针对性解决方案，熟练掌握需求分析、原型设计及文档撰写全流程，保障产品落地质量。
                  </p>
                </CardContent>
              </Card>

              <Card className="group tech-card hover:scale-105 transition-all duration-300 flex-1">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="about-title-emphasis">团队协同能力</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-justify">
                    具备项目管理与研发经验，擅长联动研发、算法团队对齐需求，善于跨部门沟通协作，精准评估技术可行性，在需求层面严格把控，高效推动项目闭环。
                  </p>
                </CardContent>
              </Card>

              <Card className="group tech-card hover:scale-105 transition-all duration-300 flex-1">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="about-title-emphasis">持续学习提升</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-justify">
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
          <h2 className="text-3xl font-bold mb-8 section-title">联系方式</h2>
          <p className="text-lg text-white mb-12">期待有机会与您探讨AI产品</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左侧：电话和邮箱 */}
            <div className="space-y-6">
              {/* 电话 */}
              <Card className="tech-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                      <div className="font-semibold text-lg mb-1 text-white">电话</div>
                      <div className="text-white text-lg">158-5181-7312</div>
                    </div>
                </div>
              </CardContent>
            </Card>

              {/* 邮箱 */}
              <Card className="tech-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-lg mb-1 text-white">邮箱</div>
                      <div className="text-white text-lg">15851817312@163.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右侧：微信 */}
            <div className="flex items-center justify-center">
              <Card className="tech-card hover:scale-105 transition-all duration-300 w-full">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform">
                      {/* <MessageSquare className="w-8 h-8 text-white" /> */}
                      <svg className="w-8 h-8 text-white" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M960.018292 617.246019c0-126.002762-126.101-228.688469-267.646759-228.688469-149.94915 0-268.014126 102.685707-268.014126 228.688469 0 126.205377 118.064976 228.684376 268.014126 228.684376 31.360242 0 63.034639-7.90504 94.555539-15.817244l86.428442 47.359634-23.729447-78.785368C912.906298 751.268432 960.018292 688.301332 960.018292 617.246019zM605.458043 577.828264c-15.699564 0-31.492248-15.616676-31.492248-31.56388 0-15.689331 15.793708-31.492248 31.492248-31.492248 23.852244 0 39.431058 15.802918 39.431058 31.492248C644.889101 562.211589 629.310288 577.828264 605.458043 577.828264zM778.790764 577.828264c-15.58086 0-31.290657-15.616676-31.290657-31.56388 0-15.689331 15.71082-31.492248 31.290657-31.492248 23.61893 0 39.435151 15.802918 39.435151 31.492248C818.225915 562.211589 802.409694 577.828264 778.790764 577.828264zM666.702919 365.928157c10.239202 0 20.342304 0.718361 30.380938 1.840928-27.325345-126.936017-163.051563-221.242893-317.967842-221.242893-173.250856 0-315.13533 118.065999-315.13533 267.974217 0 86.532819 47.24707 157.622924 126.066207 212.738196l-31.472805 94.833879 110.158912-55.258535c39.437198 7.780197 71.055312 15.801894 110.383016 15.801894 9.890254 0 19.698644-0.478907 29.426193-1.240247-6.176676-21.079084-9.720386-43.168172-9.720386-66.032926C398.821823 477.640448 517.023922 365.928157 666.702919 365.928157zM497.291508 280.516882c23.707958 0 39.427988 15.568581 39.427988 39.306214 0 23.617907-15.72003 39.420825-39.427988 39.420825-23.613814 0-47.349401-15.802918-47.349401-39.420825C449.942107 296.085462 473.677695 280.516882 497.291508 280.516882zM276.722974 359.243921c-23.572882 0-47.443545-15.802918-47.443545-39.420825 0-23.737634 23.870664-39.306214 47.443545-39.306214 23.64042 0 39.315424 15.568581 39.315424 39.306214C316.038398 343.441003 300.36237 359.243921 276.722974 359.243921z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg mb-4 text-white">微信</div>
                      {/* 微信二维码 */}
                      <div className="w-32 h-32 overflow-hidden mx-auto">
                        <img 
                          src="/IMG_8205.jpg" 
                          alt="微信二维码" 
                          className="w-full h-full object-cover"
                        /> 
                      </div>
                    </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white">
          <p>&copy; 2025 袁媛媛. </p>
          <p className="text-sm text-white/60 mt-2">Version 1.0.0</p>
        </div>
      </footer>
    </div>
  )
}
