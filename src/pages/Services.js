import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import hvacImage from '../assets/Images/services/hvacsystem.webp';
import fireProtectionImage from '../assets/Images/services/fireprotection.webp';
import mechanicalTransportImage from '../assets/Images/services/Mechanical Transport Systems.webp';
import electricalImage from '../assets/Images/services/electrical.webp';
import mechanicalImage from '../assets/Images/services/mechanical.webp';
import plumbingImage from '../assets/Images/services/plumbing.webp';
import securityImage from '../assets/Images/services/security.webp';
import communicationImage from '../assets/Images/services/communication.webp';
import lightingImage from '../assets/Images/services/lighting.webp';
import electricityImage from '../assets/Images/services/electricity.webp';
import { 
  FaArrowRight, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaRoad, FaHospital, FaBuilding, FaGraduationCap, FaHotel, FaBolt,
  FaCog, FaWrench, FaTools, FaIndustry, FaWarehouse, FaHome,
  FaLightbulb, FaPlug, FaServer, FaNetworkWired, FaSatelliteDish,
  FaWater, FaShower, FaFaucet, FaToilet, FaPumpSoap
} from 'react-icons/fa';

const Services = () => {
  const { i18n } = useTranslation();
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const serviceCategories = [
    {
      id: 0,
      name: i18n.language === 'ar' ? 'الإنشاءات' : 'Construction',
      icon: <FaBuilding className="text-4xl" />,
      description: i18n.language === 'ar' ? 'خدمات الإنشاءات الشاملة' : 'Comprehensive Construction Services',
      services: [
        {
          id: 0,
          title: i18n.language === 'ar' ? 'المباني السكنية' : 'Residential Buildings',
          subtitle: i18n.language === 'ar' ? 'منازل وفيلات ومجمعات سكنية' : 'Houses, Villas & Residential Complexes',
          description: i18n.language === 'ar' ? 'نقوم ببناء المباني السكنية بأحدث التقنيات والتصاميم العصرية' : 'We build residential buildings using the latest technologies and modern designs',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'منازل عائلية' : 'Family Homes',
            i18n.language === 'ar' ? 'فيلات فاخرة' : 'Luxury Villas',
            i18n.language === 'ar' ? 'مجمعات سكنية' : 'Residential Complexes',
            i18n.language === 'ar' ? 'أبراج سكنية' : 'Residential Towers'
          ]
        },
        {
          id: 1,
          title: i18n.language === 'ar' ? 'المباني التجارية' : 'Commercial Buildings',
          subtitle: i18n.language === 'ar' ? 'مراكز تجارية ومكاتب' : 'Shopping Centers & Offices',
          description: i18n.language === 'ar' ? 'نشيد المباني التجارية بتصاميم عصرية تلبي احتياجات الأعمال' : 'We construct commercial buildings with modern designs that meet business needs',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'مراكز تسوق' : 'Shopping Centers',
            i18n.language === 'ar' ? 'مكاتب إدارية' : 'Administrative Offices',
            i18n.language === 'ar' ? 'فنادق ومنتجعات' : 'Hotels & Resorts',
            i18n.language === 'ar' ? 'مطاعم ومقاهي' : 'Restaurants & Cafes'
          ]
        },
        {
          id: 2,
          title: i18n.language === 'ar' ? 'البنية التحتية' : 'Infrastructure',
          subtitle: i18n.language === 'ar' ? 'طرق وجسور وشبكات' : 'Roads, Bridges & Networks',
          description: i18n.language === 'ar' ? 'نطور البنية التحتية بأحدث المعايير العالمية' : 'We develop infrastructure using the latest international standards',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'طرق سريعة' : 'Highways',
            i18n.language === 'ar' ? 'جسور وأنفاق' : 'Bridges & Tunnels',
            i18n.language === 'ar' ? 'شبكات صرف صحي' : 'Sewage Networks',
            i18n.language === 'ar' ? 'شبكات مياه' : 'Water Networks'
          ]
        },
        {
          id: 3,
          title: i18n.language === 'ar' ? 'المؤسسات الطبية' : 'Healthcare Facilities',
          subtitle: i18n.language === 'ar' ? 'مستشفيات ومراكز طبية' : 'Hospitals & Medical Centers',
          description: i18n.language === 'ar' ? 'نتخصص في بناء المؤسسات الطبية بأحدث المعايير الطبية والتقنية' : 'We specialize in constructing medical facilities with the latest medical and technical standards',
          image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'مستشفيات جامعية' : 'University Hospitals',
            i18n.language === 'ar' ? 'مستشفيات عسكرية' : 'Military Hospitals',
            i18n.language === 'ar' ? 'مستشفيات متخصصة' : 'Specialized Hospitals',
            i18n.language === 'ar' ? 'مراكز طبية' : 'Medical Centers'
          ]
        },
        {
          id: 4,
          title: i18n.language === 'ar' ? 'المؤسسات التعليمية' : 'Educational Institutions',
          subtitle: i18n.language === 'ar' ? 'مدارس وجامعات وكليات' : 'Schools, Universities & Faculties',
          description: i18n.language === 'ar' ? 'نبني المؤسسات التعليمية بتصاميم حديثة تدعم بيئة التعلم المتطورة' : 'We build educational institutions with modern designs that support advanced learning environments',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'مدارس حكومية' : 'Government Schools',
            i18n.language === 'ar' ? 'كليات جامعية' : 'University Faculties',
            i18n.language === 'ar' ? 'مراكز تدريب' : 'Training Centers',
            i18n.language === 'ar' ? 'مختبرات علمية' : 'Scientific Laboratories'
          ]
        },
        {
          id: 5,
          title: i18n.language === 'ar' ? 'المباني الحكومية' : 'Government Buildings',
          subtitle: i18n.language === 'ar' ? 'مباني إدارية وأمنية' : 'Administrative & Security Buildings',
          description: i18n.language === 'ar' ? 'ننفذ المباني الحكومية بأعلى معايير الأمان والجودة المطلوبة' : 'We execute government buildings with the highest security and quality standards required',
          image: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'مباني النيابة الإدارية' : 'Administrative Prosecution Buildings',
            i18n.language === 'ar' ? 'أقسام شرطة' : 'Police Departments',
            i18n.language === 'ar' ? 'مباني حكومية' : 'Government Buildings',
            i18n.language === 'ar' ? 'مراكز خدمية' : 'Service Centers'
          ]
        },
        {
          id: 6,
          title: i18n.language === 'ar' ? 'البنية السياحية' : 'Tourism Infrastructure',
          subtitle: i18n.language === 'ar' ? 'كورنيش وساحات ومرافق سياحية' : 'Corniche, Squares & Tourism Facilities',
          description: i18n.language === 'ar' ? 'نطور البنية السياحية لتعزيز الجذب السياحي في المناطق الأثرية' : 'We develop tourism infrastructure to enhance tourist attraction in archaeological areas',
          image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'كورنيش النيل' : 'Nile Corniche',
            i18n.language === 'ar' ? 'ساحات أثرية' : 'Archaeological Squares',
            i18n.language === 'ar' ? 'مرافق إرساء' : 'Mooring Facilities',
            i18n.language === 'ar' ? 'مناطق خدمية سياحية' : 'Tourism Service Areas'
          ]
        },
        {
          id: 7,
          title: i18n.language === 'ar' ? 'المشاريع البحرية' : 'Marine Projects',
          subtitle: i18n.language === 'ar' ? 'مشاريع الاستزراع السمكي والبنية البحرية' : 'Aquaculture & Marine Infrastructure Projects',
          description: i18n.language === 'ar' ? 'نختص في تنفيذ المشاريع البحرية والاستزراع السمكي بتقنيات متطورة' : 'We specialize in executing marine projects and aquaculture with advanced techniques',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'مزارع سمكية' : 'Fish Farms',
            i18n.language === 'ar' ? 'قناة السويس الجديدة' : 'New Suez Canal',
            i18n.language === 'ar' ? 'مرافق بحرية' : 'Marine Facilities',
            i18n.language === 'ar' ? 'بنية تحتية بحرية' : 'Marine Infrastructure'
          ]
        }
      ]
    },
    {
      id: 1,
      name: i18n.language === 'ar' ? 'الميكانيكية' : 'Mechanical',
      icon: <FaCog className="text-4xl" />,
      description: i18n.language === 'ar' ? 'حلول ميكانيكية متكاملة' : 'Integrated Mechanical Solutions',
      services: [
        {
          id: 0,
          title: i18n.language === 'ar' ? 'أنظمة التكييف والتهوية' : 'HVAC Systems',
          subtitle: i18n.language === 'ar' ? 'تكييف مركزي وتهوية صناعية' : 'Central AC & Industrial Ventilation',
          description: i18n.language === 'ar' ? 'نصمم وننفذ أنظمة التكييف والتهوية للمباني والمنشآت الصناعية' : 'We design and implement HVAC systems for buildings and industrial facilities',
          image: hvacImage,
          features: [
            i18n.language === 'ar' ? 'تكييف مركزي' : 'Central Air Conditioning',
            i18n.language === 'ar' ? 'تهوية صناعية' : 'Industrial Ventilation',
            i18n.language === 'ar' ? 'تحكم في درجة الحرارة' : 'Temperature Control',
            i18n.language === 'ar' ? 'تنقية الهواء' : 'Air Purification'
          ]
        },
        {
          id: 1,
          title: i18n.language === 'ar' ? 'أنظمة النقل الميكانيكي' : 'Mechanical Transport Systems',
          subtitle: i18n.language === 'ar' ? 'مصاعد وسلالم متحركة' : 'Elevators & Escalators',
          description: i18n.language === 'ar' ? 'نركب ونصون أنظمة النقل الميكانيكي في المباني العالية' : 'We install and maintain mechanical transport systems in high-rise buildings',
          image: mechanicalTransportImage,
          features: [
            i18n.language === 'ar' ? 'مصاعد ركاب' : 'Passenger Elevators',
            i18n.language === 'ar' ? 'مصاعد شحن' : 'Freight Elevators',
            i18n.language === 'ar' ? 'سلالم متحركة' : 'Escalators',
            i18n.language === 'ar' ? 'ممرات متحركة' : 'Moving Walkways'
          ]
        },
        {
          id: 2,
          title: i18n.language === 'ar' ? 'أنظمة مكافحة الحريق' : 'Fire Fighting Systems',
          subtitle: i18n.language === 'ar' ? 'حماية متكاملة من الحريق' : 'Integrated Fire Protection',
          description: i18n.language === 'ar' ? 'نصمم وننفذ أنظمة مكافحة الحريق المتطورة' : 'We design and implement advanced fire fighting systems',
          image: fireProtectionImage,
          features: [
            i18n.language === 'ar' ? 'رشاشات مياه' : 'Water Sprinklers',
            i18n.language === 'ar' ? 'أنظمة رغوة' : 'Foam Systems',
            i18n.language === 'ar' ? 'كاشفات دخان' : 'Smoke Detectors',
            i18n.language === 'ar' ? 'مخارج طوارئ' : 'Emergency Exits'
          ]
        },
        {
          id: 3,
          title: i18n.language === 'ar' ? 'أنظمة التبريد الصناعي' : 'Industrial Cooling Systems',
          subtitle: i18n.language === 'ar' ? 'تبريد للمصانع والمستودعات' : 'Cooling for Factories & Warehouses',
          description: i18n.language === 'ar' ? 'نوفر حلول التبريد الصناعي للمنشآت الكبيرة' : 'We provide industrial cooling solutions for large facilities',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
            i18n.language === 'ar' ? 'مبردات صناعية' : 'Industrial Chillers',
            i18n.language === 'ar' ? 'أنظمة تبريد مياه' : 'Water Cooling Systems',
            i18n.language === 'ar' ? 'تبريد هواء' : 'Air Cooling',
            i18n.language === 'ar' ? 'تحكم في الرطوبة' : 'Humidity Control'
          ]
        },
        {
          id: 4,
          title: i18n.language === 'ar' ? 'أنظمة السكك الحديدية' : 'Railway Systems',
          subtitle: i18n.language === 'ar' ? 'قطارات كهربائية وأنظمة النقل' : 'Electric Trains & Transportation Systems',
          description: i18n.language === 'ar' ? 'نشارك في مشاريع السكك الحديدية والقطارات الكهربائية الحديثة' : 'We participate in railway projects and modern electric train systems',
          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'قطارات كهربائية' : 'Electric Trains',
            i18n.language === 'ar' ? 'أنظمة إشارات' : 'Signaling Systems',
            i18n.language === 'ar' ? 'محطات قطارات' : 'Train Stations',
            i18n.language === 'ar' ? 'بنية تحتية للسكك الحديدية' : 'Railway Infrastructure'
          ]
        }
      ]
    },
    {
      id: 2,
      name: i18n.language === 'ar' ? 'الكهربائية' : 'Electrical',
      icon: <FaBolt className="text-4xl" />,
      description: i18n.language === 'ar' ? 'حلول كهربائية متطورة' : 'Advanced Electrical Solutions',
      services: [
        {
          id: 0,
          title: i18n.language === 'ar' ? 'أنظمة التوزيع الكهربائي' : 'Electrical Distribution Systems',
          subtitle: i18n.language === 'ar' ? 'لوحات كهربائية وكابلات' : 'Electrical Panels & Cables',
          description: i18n.language === 'ar' ? 'نصمم وننفذ أنظمة التوزيع الكهربائي للمباني والمنشآت' : 'We design and implement electrical distribution systems for buildings and facilities',
          image: electricityImage,
          features: [
            i18n.language === 'ar' ? 'لوحات كهربائية رئيسية' : 'Main Electrical Panels',
            i18n.language === 'ar' ? 'لوحات فرعية' : 'Sub Panels',
            i18n.language === 'ar' ? 'كابلات كهربائية' : 'Electrical Cables',
            i18n.language === 'ar' ? 'قواطع كهربائية' : 'Circuit Breakers'
          ]
        },
        {
          id: 1,
          title: i18n.language === 'ar' ? 'أنظمة الإضاءة' : 'Lighting Systems',
          subtitle: i18n.language === 'ar' ? 'إضاءة ذكية وموفرة للطاقة' : 'Smart & Energy-Efficient Lighting',
          description: i18n.language === 'ar' ? 'نصمم أنظمة إضاءة ذكية وموفرة للطاقة' : 'We design smart and energy-efficient lighting systems',
          image: lightingImage,
          features: [
            i18n.language === 'ar' ? 'إضاءة LED' : 'LED Lighting',
            i18n.language === 'ar' ? 'إضاءة ذكية' : 'Smart Lighting',
            i18n.language === 'ar' ? 'تحكم تلقائي' : 'Automatic Control',
            i18n.language === 'ar' ? 'توفير الطاقة' : 'Energy Saving'
          ]
        },
        {
          id: 2,
          title: i18n.language === 'ar' ? 'أنظمة الأمان والمراقبة' : 'Security & Surveillance Systems',
          subtitle: i18n.language === 'ar' ? 'كاميرات وأنظمة إنذار' : 'Cameras & Alarm Systems',
          description: i18n.language === 'ar' ? 'نوفر أنظمة أمان ومراقبة متكاملة' : 'We provide integrated security and surveillance systems',
          image: securityImage,
          features: [
            i18n.language === 'ar' ? 'كاميرات مراقبة' : 'Surveillance Cameras',
            i18n.language === 'ar' ? 'أنظمة إنذار' : 'Alarm Systems',
            i18n.language === 'ar' ? 'أقفال إلكترونية' : 'Electronic Locks',
            i18n.language === 'ar' ? 'أنظمة دخول' : 'Access Control'
          ]
        },
        {
          id: 3,
          title: i18n.language === 'ar' ? 'أنظمة الاتصالات' : 'Communication Systems',
          subtitle: i18n.language === 'ar' ? 'إنترنت واتصالات داخلية' : 'Internet & Internal Communications',
          description: i18n.language === 'ar' ? 'نصمم أنظمة اتصالات متطورة للمباني الذكية' : 'We design advanced communication systems for smart buildings',
          image: communicationImage,
      features: [
            i18n.language === 'ar' ? 'شبكات إنترنت' : 'Internet Networks',
            i18n.language === 'ar' ? 'هواتف داخلية' : 'Internal Phones',
            i18n.language === 'ar' ? 'أنظمة صوت' : 'Audio Systems',
            i18n.language === 'ar' ? 'شبكات لاسلكية' : 'Wireless Networks'
          ]
        },
        {
          id: 4,
          title: i18n.language === 'ar' ? 'الأنظمة الكهربائية الطبية' : 'Medical Electrical Systems',
          subtitle: i18n.language === 'ar' ? 'أنظمة كهربائية متخصصة للمستشفيات' : 'Specialized Hospital Electrical Systems',
          description: i18n.language === 'ar' ? 'نصمم الأنظمة الكهربائية المتخصصة للمؤسسات الطبية وفقاً للمعايير الدولية' : 'We design specialized electrical systems for medical institutions according to international standards',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'أنظمة كهرباء طوارئ' : 'Emergency Power Systems',
            i18n.language === 'ar' ? 'أنظمة UPS طبية' : 'Medical UPS Systems',
            i18n.language === 'ar' ? 'كهرباء غرف العمليات' : 'Operating Room Electrical',
            i18n.language === 'ar' ? 'أنظمة تأريض طبي' : 'Medical Grounding Systems'
          ]
        }
      ]
    },
    {
      id: 3,
      name: i18n.language === 'ar' ? 'حلول السباكة' : 'Plumbing Solutions',
      icon: <FaWater className="text-4xl" />,
      description: i18n.language === 'ar' ? 'حلول سباكة شاملة' : 'Comprehensive Plumbing Solutions',
      services: [
        {
          id: 0,
          title: i18n.language === 'ar' ? 'أنظمة المياه' : 'Water Systems',
          subtitle: i18n.language === 'ar' ? 'توصيل مياه وصرف صحي' : 'Water Supply & Drainage',
          description: i18n.language === 'ar' ? 'نصمم وننفذ أنظمة المياه والصرف الصحي' : 'We design and implement water supply and drainage systems',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'توصيل مياه' : 'Water Supply',
            i18n.language === 'ar' ? 'صرف صحي' : 'Sewage Drainage',
            i18n.language === 'ar' ? 'مضخات مياه' : 'Water Pumps',
            i18n.language === 'ar' ? 'خزانات مياه' : 'Water Tanks'
          ]
        },
        {
          id: 1,
          title: i18n.language === 'ar' ? 'أدوات صحية' : 'Sanitary Ware',
          subtitle: i18n.language === 'ar' ? 'حمامات ومطابخ' : 'Bathrooms & Kitchens',
          description: i18n.language === 'ar' ? 'نركب ونصون جميع أنواع الأدوات الصحية' : 'We install and maintain all types of sanitary ware',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
            i18n.language === 'ar' ? 'مراحيض' : 'Toilets',
            i18n.language === 'ar' ? 'أحواض غسيل' : 'Wash Basins',
            i18n.language === 'ar' ? 'دشات' : 'Showers',
            i18n.language === 'ar' ? 'مغاسل مطابخ' : 'Kitchen Sinks'
          ]
        },
        {
          id: 2,
          title: i18n.language === 'ar' ? 'أنظمة الري' : 'Irrigation Systems',
          subtitle: i18n.language === 'ar' ? 'ري تلقائي للمساحات الخضراء' : 'Automatic Irrigation for Green Spaces',
          description: i18n.language === 'ar' ? 'نصمم أنظمة ري تلقائية للمساحات الخضراء' : 'We design automatic irrigation systems for green spaces',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
            i18n.language === 'ar' ? 'ري بالرش' : 'Sprinkler Irrigation',
            i18n.language === 'ar' ? 'ري بالتنقيط' : 'Drip Irrigation',
            i18n.language === 'ar' ? 'تحكم تلقائي' : 'Automatic Control',
            i18n.language === 'ar' ? 'توفير المياه' : 'Water Conservation'
          ]
        },
        {
          id: 3,
          title: i18n.language === 'ar' ? 'أنظمة معالجة المياه' : 'Water Treatment Systems',
          subtitle: i18n.language === 'ar' ? 'تنقية ومعالجة المياه' : 'Water Purification & Treatment',
          description: i18n.language === 'ar' ? 'نوفر أنظمة معالجة وتنقية المياه' : 'We provide water treatment and purification systems',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
            i18n.language === 'ar' ? 'فلاتر مياه' : 'Water Filters',
            i18n.language === 'ar' ? 'معالجة كيميائية' : 'Chemical Treatment',
            i18n.language === 'ar' ? 'تنقية بيولوجية' : 'Biological Purification',
            i18n.language === 'ar' ? 'تحليل مياه' : 'Water Analysis'
          ]
        },
        {
          id: 4,
          title: i18n.language === 'ar' ? 'السباكة الصناعية والطبية' : 'Industrial & Medical Plumbing',
          subtitle: i18n.language === 'ar' ? 'أنظمة سباكة متخصصة للمنشآت الكبرى' : 'Specialized Plumbing for Large Facilities',
          description: i18n.language === 'ar' ? 'نوفر حلول السباكة المتخصصة للمستشفيات والمنشآت الصناعية' : 'We provide specialized plumbing solutions for hospitals and industrial facilities',
          image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          features: [
            i18n.language === 'ar' ? 'أنظمة الغازات الطبية' : 'Medical Gas Systems',
            i18n.language === 'ar' ? 'سباكة المختبرات' : 'Laboratory Plumbing',
            i18n.language === 'ar' ? 'أنظمة الصرف الصناعي' : 'Industrial Drainage',
            i18n.language === 'ar' ? 'أنابيب مقاومة للمواد الكيمائية' : 'Chemical Resistant Piping'
          ]
        }
      ]
    }
  ];

  // Debug logging
  console.log('Services component rendered');
  console.log('Service categories:', serviceCategories);
  console.log('Active category:', activeCategory);
  console.log('Current services:', serviceCategories[activeCategory]?.services);

  // Error handling - ensure we have valid data
  // Debug: Remove this condition that's preventing the page from rendering
  // if (!serviceCategories || serviceCategories.length === 0) {
  //   return loading state
  // }

  const currentCategory = serviceCategories[activeCategory];
  const currentServices = currentCategory?.services || [];

  // Debug: Remove the early return condition that's preventing categories from showing
  // The categories should always be visible even if services are loading

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800' 
        : 'bg-gradient-to-br from-slate-50 to-white'
    }`}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden" role="banner" aria-labelledby="services-hero-heading">
        {/* Background Elements */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700' 
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
        }`} />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#ED8722]/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-32 right-32 w-16 h-16 border border-[#ED8722]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-48 left-48 w-12 h-12 bg-[#ED8722]/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#ED8722]/20 to-orange-500/20 rounded-full border border-[#ED8722]/30 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#ED8722] rounded-full animate-pulse" />
              <span className="text-[#ED8722] font-semibold text-sm tracking-wide uppercase">
                {i18n.language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
              </span>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <h1 id="services-hero-heading" className={`text-5xl lg:text-7xl font-bold mb-8 font-cairo leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'from-white via-[#ED8722] to-white' 
                  : 'from-slate-900 via-[#ED8722] to-slate-900'
              }`}>
                {i18n.language === 'ar' ? 'خدمات شاملة ومتخصصة' : 'Comprehensive & Specialized Services'}
              </span>
            </h1>

            <p className={`text-xl lg:text-2xl mb-12 font-cairo leading-relaxed max-w-4xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {i18n.language === 'ar' 
                ? 'نقدم مجموعة واسعة من الخدمات الهندسية والإنشائية عالية الجودة لضمان نجاح مشاريعك'
                : 'We provide a comprehensive range of high-quality engineering and construction services to ensure the success of your projects'
              }
            </p>

            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ED8722] to-transparent mx-auto rounded-full" />
          </motion.div>

          {/* Service Categories - Simplified */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <h2 className="sr-only">Service Categories</h2>
            
            {/* Construction Category */}
            <button
              onClick={() => setActiveCategory(0)}
              className={`group cursor-pointer relative rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 w-full text-left min-h-[300px] ${
                activeCategory === 0 
                  ? 'border-[#ED8722] shadow-2xl shadow-[#ED8722]/30 scale-105' 
                  : isDarkMode
                    ? 'bg-dark-800 border-dark-700 hover:border-[#ED8722]/50'
                    : 'bg-white border-slate-200 hover:border-[#ED8722]/50'
              }`}
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Construction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/60" />
              </div>
              
              <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  activeCategory === 0 
                    ? 'bg-gradient-to-br from-[#ED8722] to-orange-500 text-white' 
                    : 'bg-white/20 text-white backdrop-blur-sm group-hover:bg-[#ED8722]/20'
                }`}>
                  <FaBuilding className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-cairo group-hover:text-[#ED8722] transition-colors">
                  Construction
                </h3>
                
                <p className="text-slate-200 text-sm">
                  Comprehensive Construction Services
                </p>
                
                <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                  <span>8</span>
                  <span>Services</span>
                </div>
              </div>
            </button>

            {/* Mechanical Category */}
            <button
              onClick={() => setActiveCategory(1)}
              className={`group cursor-pointer relative rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 w-full text-left min-h-[300px] ${
                activeCategory === 1 
                  ? 'border-[#ED8722] shadow-2xl shadow-[#ED8722]/30 scale-105' 
                  : isDarkMode
                    ? 'bg-dark-800 border-dark-700 hover:border-[#ED8722]/50'
                    : 'bg-white border-slate-200 hover:border-[#ED8722]/50'
              }`}
            >
              <div className="absolute inset-0">
                <img 
                  src={mechanicalImage}
                  alt="Mechanical"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/60" />
              </div>
              
              <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  activeCategory === 1 
                    ? 'bg-gradient-to-br from-[#ED8722] to-orange-500 text-white' 
                    : 'bg-white/20 text-white backdrop-blur-sm group-hover:bg-[#ED8722]/20'
                }`}>
                  <FaCog className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-cairo group-hover:text-[#ED8722] transition-colors">
                  Mechanical
                </h3>
                
                <p className="text-slate-200 text-sm">
                  Integrated Mechanical Solutions
                </p>
                
                <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                  <span>5</span>
                  <span>Services</span>
                </div>
              </div>
            </button>

            {/* Electrical Category */}
            <button
              onClick={() => setActiveCategory(2)}
              className={`group cursor-pointer relative rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 w-full text-left min-h-[300px] ${
                activeCategory === 2 
                  ? 'border-[#ED8722] shadow-2xl shadow-[#ED8722]/30 scale-105' 
                  : isDarkMode
                    ? 'bg-dark-800 border-dark-700 hover:border-[#ED8722]/50'
                    : 'bg-white border-slate-200 hover:border-[#ED8722]/50'
              }`}
            >
              <div className="absolute inset-0">
                <img 
                  src={electricalImage}
                  alt="Electrical"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/60" />
              </div>
              
              <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  activeCategory === 2 
                    ? 'bg-gradient-to-br from-[#ED8722] to-orange-500 text-white' 
                    : 'bg-white/20 text-white backdrop-blur-sm group-hover:bg-[#ED8722]/20'
                }`}>
                  <FaBolt className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-cairo group-hover:text-[#ED8722] transition-colors">
                  Electrical
                </h3>
                
                <p className="text-slate-200 text-sm">
                  Advanced Electrical Systems
                </p>
                
                <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                  <span>5</span>
                  <span>Services</span>
                </div>
              </div>
            </button>

            {/* Plumbing Category */}
            <button
              onClick={() => setActiveCategory(3)}
              className={`group cursor-pointer relative rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 w-full text-left min-h-[300px] ${
                activeCategory === 3 
                  ? 'border-[#ED8722] shadow-2xl shadow-[#ED8722]/30 scale-105' 
                  : isDarkMode
                    ? 'bg-dark-800 border-dark-700 hover:border-[#ED8722]/50'
                    : 'bg-white border-slate-200 hover:border-[#ED8722]/50'
              }`}
            >
              <div className="absolute inset-0">
                <img 
                  src={plumbingImage}
                  alt="Plumbing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/60" />
              </div>
              
              <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  activeCategory === 3 
                    ? 'bg-gradient-to-br from-[#ED8722] to-orange-500 text-white' 
                    : 'bg-white/20 text-white backdrop-blur-sm group-hover:bg-[#ED8722]/20'
                }`}>
                  <FaWater className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-cairo group-hover:text-[#ED8722] transition-colors">
                  Plumbing
                </h3>
                
                <p className="text-slate-200 text-sm">
                  Professional Plumbing Services
                </p>
                
                <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                  <span>5</span>
                  <span>Services</span>
                </div>
              </div>
            </button>
          </div>

          {/* Spacer */}
          <div className="h-16 lg:h-24" />

          {/* Services Grid for Active Category */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-3xl shadow-xl overflow-hidden border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-dark-800 border-dark-700 shadow-dark-900/50 hover:shadow-2xl hover:shadow-dark-800/50' 
                    : 'bg-white border-slate-100 shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50'
                }`}
              >
                {/* Enhanced Service Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  


                  {/* Floating Service Icon */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-[#ED8722]/90 rounded-2xl flex items-center justify-center text-white shadow-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {currentCategory.icon}
                  </div>

                  {/* Image Overlay Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#ED8722]/20 to-transparent" />
                </div>

                {/* Enhanced Service Content */}
                <div className="p-8 relative">
                  {/* Content Background Pattern */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-dark-700/50 to-dark-800' 
                      : 'bg-gradient-to-br from-slate-50/50 to-white'
                  }`} />
                  
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-3 font-cairo group-hover:text-[#ED8722] transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                  {service.title}
                    </h3>
                    
                    <p className={`mb-4 font-medium text-lg ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {service.subtitle}
                    </p>

                    <p className={`mb-6 leading-relaxed text-base ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                    {service.description}
                  </p>

                    {/* Enhanced Features - 2 Columns */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 group/feature"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-7 h-7 bg-gradient-to-br from-[#ED8722] to-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover/feature:scale-110 transition-transform duration-300 flex-shrink-0">
                            <FaCheckCircle className="text-xs" />
                    </div>
                          <span className={`text-xs font-medium transition-colors duration-300 leading-tight ${
                            isDarkMode 
                              ? 'text-slate-400 group-hover/feature:text-slate-200' 
                              : 'text-slate-600 group-hover/feature:text-slate-800'
                          }`}>{feature}</span>
                        </motion.div>
                      ))}
              </div>

                    {/* Enhanced CTA Button */}
                  <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/contact')}
                      className="w-full py-4 px-6 bg-gradient-to-r from-[#ED8722] to-orange-500 text-white font-semibold rounded-2xl shadow-lg shadow-[#ED8722]/25 hover:shadow-xl hover:shadow-[#ED8722]/30 transition-all duration-300 group-hover:from-[#ED8722] group-hover:to-orange-600 relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {i18n.language === 'ar' ? 'احصل على عرض سعر' : 'Get Quote'}
                        <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      
                      {/* Button Background Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ED8722] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ED8722]/5 to-orange-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                ))}
                </motion.div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-full h-full ${
            isDarkMode 
              ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800' 
              : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          }`} />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#ED8722]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-32 right-32 w-16 h-16 border border-[#ED8722]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute bottom-32 left-32 w-12 h-12 bg-[#ED8722]/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative rounded-3xl p-16 border shadow-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-br from-dark-800/80 via-dark-700/80 to-dark-800/80 border-dark-600/50 shadow-black/40' 
                : 'bg-gradient-to-br from-slate-800/80 via-slate-700/80 to-slate-800/80 border-slate-600/50 shadow-black/40'
            }`}
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#ED8722] rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#ED8722] rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#ED8722] rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#ED8722] rounded-br-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#ED8722]/20 to-orange-500/20 rounded-full border border-[#ED8722]/30 mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#ED8722] rounded-full animate-pulse" />
                <span className="text-[#ED8722] font-semibold text-sm tracking-wide uppercase">
                  {i18n.language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                </span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`text-5xl lg:text-6xl font-bold mb-8 font-cairo leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'from-white via-[#ED8722] to-white' 
                  : 'from-slate-900 via-[#ED8722] to-slate-900'
              }`}>
              {i18n.language === 'ar' ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`text-xl lg:text-2xl mb-12 font-cairo leading-relaxed max-w-4xl mx-auto ${
                isDarkMode ? 'text-slate-300' : 'text-slate-400'
              }`}
            >
              {i18n.language === 'ar' 
                ? 'دعنا نناقش متطلباتك ونقدم لك الحلول المثلى لمشروعك مع ضمان الجودة والتميز'
                : 'Let\'s discuss your requirements and provide you with the optimal solutions for your project, ensuring quality and excellence'
              }
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="group/btn inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#B45309] to-orange-600 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-[#B45309]/30 hover:shadow-3xl hover:shadow-[#B45309]/40 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
              {i18n.language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                  <FaArrowRight className="text-xl group-hover/btn:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#B45309] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="group/btn2 inline-flex items-center gap-3 px-12 py-6 border-2 border-[#B45309] text-[#B45309] font-bold text-lg rounded-2xl hover:bg-[#B45309] hover:text-white transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {i18n.language === 'ar' ? 'احصل على عرض سعر' : 'Get Free Quote'}
                  <FaArrowRight className="text-xl group-hover/btn2:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-[#B45309] opacity-0 group-hover/btn2:opacity-100 transition-opacity duration-300" />
            </motion.button>
            </motion.div>

            {/* Bottom Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-48 h-1 bg-gradient-to-r from-transparent via-[#ED8722] to-transparent mx-auto mt-12 rounded-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 