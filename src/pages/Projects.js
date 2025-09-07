import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaHospital, FaRoad, FaBuilding, FaUserGraduate, FaStethoscope, FaBriefcase, FaHotel, FaMapMarkerAlt, FaRulerCombined, FaCalendarAlt, FaHome, FaShoppingCart, FaUmbrellaBeach, FaMusic, FaSeedling, FaGlobe } from 'react-icons/fa';
import heroImage from '../assets/Images/project/projectslider.webp';
import galalaImage from '../assets/galala-1.jpg';
import lvmaiImage from '../assets/lvmai-scaled.jpg';
import rdkbshImage from '../assets/rdkbsh-2-1.jpg';
import btshkImage from '../assets/btshk-7.jpg';
import GalalaUniversityHospitalImg from '../assets/Images/project/Hospital/GalalaUniversityHospital.jpg';
import LavidaHospitalImg from '../assets/Images/project/Hospital/LavidaHospital.jpg';
import MansouraMilitaryHospitalImg from '../assets/Images/project/Hospital/MansouraMilitaryHospital.jpg';
import ArmentHospitalImg from '../assets/Images/project/Hospital/ArmentHospital.jpg';
import BedayatHospitalImg from '../assets/Images/project/Hospital/BedayatHospital.jpg';
import SamaloutHospitalImg from '../assets/Images/project/Hospital/SamaloutHospital.jpg';
import AswanOphthalmologyHospitalImg from '../assets/Images/project/Hospital/AswanOphthalmologyHospital.jpg';
import KomOmboHospitalImg from '../assets/Images/project/Hospital/KomOmboHospital.jpg';
import SohagUniversityHospitalImg from '../assets/Images/project/Hospital/SohagUniversityHospital.jpg';
import EsnaSpecializedHospitalImg from '../assets/Images/project/Hospital/EsnaSpecializedHospital.jpg';
import NileCornichLuxorImg from '../assets/Images/project/Road/NileCornichLuxor.jpg';
import ElDabaaProjectsImg from '../assets/Images/project/Road/ElDabaaProjects.jpg';
import ToshkaImg from '../assets/Images/project/Road/Toshka.jpg';
import KalabshaBallanaRoadImg from '../assets/Images/project/Road/Kalabsha-Ballana-Road.jpg';
import LuxorAirportRoadImg from '../assets/Images/project/Road/LuxorAirportRoad-LuxorGovernorate.jpg';
import AlKabaashRoadLuxorImg from '../assets/Images/project/Road/Al-KabaashRoad-Luxor.jpg';
import NewSuezCanalImg from '../assets/Images/project/Road/NewSuezCanal.jpg';
import FishfarmsEastPortSaidImg from '../assets/Images/project/Road/FishfarmsEastPortSaid.jpg';
import ElectricTrainElAlameinMatrouhImg from '../assets/Images/project/Road/ElectricTrainElAlameinMatrouh.jpg';
import SadatRoadAswanImg from '../assets/Images/project/Road/SadatRoadAswan.jpg';
import NewIsmailiaCityRoadsImg from '../assets/Images/project/Road/NewIsmailiaCityRoads.jpg';
import BaniMazarALBuwaitiRoadImg from '../assets/Images/project/Road/BaniMazarALBuwaitiRoad.jpg';
import KarnakTempleSquareImg from '../assets/Images/project/Various/KarnakTempleSquare.jpg';
import AdministrativeProsecutionLuxorImg from '../assets/Images/project/Administrative/AdministrativeProsecutionLuxor.jpg';
import QantaraPoliceDepartmentImg from '../assets/Images/project/Administrative/QantaraPoliceDepartment.jpg';
import AswanGovernorateBuildingImg from '../assets/Images/project/Administrative/AswanGovernorateBuilding.jpg';
import NoubyAdministrativeHeadquarterImg from '../assets/Images/project/Administrative/noubyAdministrativeheadquarter.jpg';
import AlTodSchoolLuxorImg from '../assets/Images/project/Education/AlTodSchoolLuxor.jpg';
import AswanCornicheImg from '../assets/Images/project/Various/AswanCorniche.jpg';
import KarnakParkLuxorImg from '../assets/Images/project/Various/KarnakParkLuxor.jpg';
import TodYouthHostelLuxorImg from '../assets/Images/project/Various/TodYouthHostelLuxor.jpg';
import ElTarfRuralhousesImg from '../assets/Images/project/Various/ElTarfRuralhouses.jpg';
import AlFayrouzClubIsmailiaImg from '../assets/Images/project/Various/AlFayrouzClubIsmailia.jpg';
import MallsWestShoroukImg from '../assets/Images/project/Various/MallsWestShorouk.jpg';
import FacultyofAlsunImg from '../assets/Images/project/Education/FacultyofAlsun.jpg';
// Tailwind-based implementation; removed styled-components
// Utility to build bg style for images
const buildBgStyle = (img) => ({ backgroundImage: `url(${img})` });

// Project Data
const projectData = {
  hospitals: [
    {
      id: 1,
      titleKey: 'projects.GalalaUniversityHospitalTitle',
      descKey: 'projects.GalalaUniversityHospitalDesc',
      image: GalalaUniversityHospitalImg,
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Galala City, Egypt',
        area: '45,000 square meters',
        owner: 'Egyptian Ministry of Health',
        year: 2023,
      }
    },
    {
      id: 2,
      titleKey: 'projects.LavidaHospitalTitle',
      descKey: 'projects.LavidaHospitalDesc',
      image: LavidaHospitalImg,
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Cairo, Egypt',
        area: '40,000 square meters',
        owner: 'Private Sector',
        year: 2023,
      }
    },
    {
      id: 3,
      titleKey: 'projects.MansouraMilitaryHospitalTitle',
      descKey: 'projects.MansouraMilitaryHospitalDesc',
      image: MansouraMilitaryHospitalImg,
      category: 'hospitals',
      tags: ['Medical', 'Administrative'],
      meta: {
        location: 'Mansoura, Egypt',
        area: '35,000 square meters',
        owner: 'Ministry of Defense',
        year: 2022,
      }
    },
    {
      id: 4,
      titleKey: 'projects.ArmentHospitalTitle',
      descKey: 'projects.ArmentHospitalDesc',
      image: ArmentHospitalImg,
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Arment, Egypt',
        area: '25,000 square meters',
        owner: 'Ministry of Health',
        year: 2022,
      }
    },
    {
      id: 5,
      titleKey: 'projects.BedayatHospitalTitle',
      descKey: 'projects.BedayatHospitalDesc',
      image: BedayatHospitalImg,
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Cairo, Egypt',
        area: '30,000 square meters',
        owner: 'Private Sector',
        year: 2023,
      }
    },
    {
      id: 6,
      titleKey: 'projects.SamaloutHospitalTitle',
      descKey: 'projects.SamaloutHospitalDesc',
      image: SamaloutHospitalImg,
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Samalout, Minya',
        area: '28,000 square meters',
        owner: 'Ministry of Health',
        year: 2022,
      }
    },
    {
      id: 7,
      titleKey: 'projects.AswanOphthalmologyHospitalTitle',
      descKey: 'projects.AswanOphthalmologyHospitalDesc',
      image: AswanOphthalmologyHospitalImg,
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Aswan, Egypt',
        area: '20,000 square meters',
        owner: 'Ministry of Health',
        year: 2021,
      }
    },
    {
      id: 8,
      titleKey: 'projects.KomOmboHospitalTitle',
      descKey: 'projects.KomOmboHospitalDesc',
      image: KomOmboHospitalImg,
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Kom Ombo, Aswan',
        area: '18,000 square meters',
        owner: 'Ministry of Health',
        year: 2021,
      }
    },
    {
      id: 9,
      titleKey: 'projects.SohagUniversityHospitalTitle',
      descKey: 'projects.SohagUniversityHospitalDesc',
      image: SohagUniversityHospitalImg,
      category: 'hospitals',
      tags: ['Medical', 'Education'],
      meta: {
        location: 'Sohag, Egypt',
        area: '50,000 square meters',
        owner: 'Sohag University',
        year: 2020,
      }
    },
    {
      id: 10,
      titleKey: 'projects.EsnaSpecializedHospitalTitle',
      descKey: 'projects.EsnaSpecializedHospitalDesc',
      image: EsnaSpecializedHospitalImg,
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Esna, Luxor',
        area: '22,000 square meters',
        owner: 'Ministry of Health',
        year: 2021,
      }
    },
    {
      id: 11,
      titleKey: 'projects.CairoMedicalCenterTitle',
      descKey: 'projects.CairoMedicalCenterDesc',
      image: GalalaUniversityHospitalImg, // Using existing image as placeholder
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Cairo, Egypt',
        area: '38,000 square meters',
        owner: 'Private Sector',
        year: 2023,
      }
    },
    {
      id: 12,
      titleKey: 'projects.AlexandriaSpecializedClinicTitle',
      descKey: 'projects.AlexandriaSpecializedClinicDesc',
      image: LavidaHospitalImg, // Using existing image as placeholder
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Alexandria, Egypt',
        area: '15,000 square meters',
        owner: 'Private Sector',
        year: 2022,
      }
    },
    {
      id: 13,
      titleKey: 'projects.GizaRehabilitationCenterTitle',
      descKey: 'projects.GizaRehabilitationCenterDesc',
      image: MansouraMilitaryHospitalImg, // Using existing image as placeholder
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Giza, Egypt',
        area: '32,000 square meters',
        owner: 'Ministry of Health',
        year: 2023,
      }
    },
    {
      id: 14,
      titleKey: 'projects.PortSaidEmergencyHospitalTitle',
      descKey: 'projects.PortSaidEmergencyHospitalDesc',
      image: ArmentHospitalImg, // Using existing image as placeholder
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Port Said, Egypt',
        area: '28,000 square meters',
        owner: 'Ministry of Health',
        year: 2022,
      }
    },
    {
      id: 15,
      titleKey: 'projects.SinaiMedicalComplexTitle',
      descKey: 'projects.SinaiMedicalComplexDesc',
      image: BedayatHospitalImg, // Using existing image as placeholder
      category: 'hospitals',
      tags: ['Medical'],
      meta: {
        location: 'Sinai, Egypt',
        area: '42,000 square meters',
        owner: 'Ministry of Health',
        year: 2021,
      }
    }
  ],
  infrastructure: [
    {
      id: 16,
      titleKey: 'projects.SadatRoadTitle',
      descKey: 'projects.SadatRoadDesc',
      image: SadatRoadAswanImg,
      category: 'infrastructure',
      tags: []
    },
    {
      id: 17,
      titleKey: 'projects.NewIsmailiaTitle',
      descKey: 'projects.NewIsmailiaDesc',
      image: NewIsmailiaCityRoadsImg,
      category: 'infrastructure',
      tags: []
    },
    {
      id: 18,
      titleKey: 'projects.BaniMazarTitle',
      descKey: 'projects.BaniMazarDesc',
      image: BaniMazarALBuwaitiRoadImg,
      category: 'infrastructure',
      tags: []
    },
    {
      id: 19,
      titleKey: 'projects.ElectricTrainTitle',
      descKey: 'projects.ElectricTrainDesc',
      image: ElectricTrainElAlameinMatrouhImg,
      category: 'infrastructure',
      tags: ['Hospitality']
    },
    {
      id: 20,
      titleKey: 'projects.NewSuezCanalTitle',
      descKey: 'projects.NewSuezCanalDesc',
      image: NewSuezCanalImg,
      category: 'infrastructure',
      tags: []
    },
    {
      id: 21,
      titleKey: 'projects.FishFarmsEastPortSaidTitle',
      descKey: 'projects.FishFarmsEastPortSaidDesc',
      image: FishfarmsEastPortSaidImg,
      category: 'infrastructure',
      tags: ['Agricultural']
    },
    {
      id: 22,
      titleKey: 'projects.AirportRoadLuxorTitle',
      descKey: 'projects.AirportRoadLuxorDesc',
      image: LuxorAirportRoadImg,
      category: 'infrastructure',
      tags: ['Hospitality']
    },
    {
      id: 23,
      titleKey: 'projects.KalabshaBallanaRoadTitle',
      descKey: 'projects.KalabshaBallanaRoadDesc',
      image: KalabshaBallanaRoadImg,
      category: 'infrastructure',
      tags: []
    },
    {
      id: 24,
      titleKey: 'projects.AlKabaashRoadLuxorTitle',
      descKey: 'projects.AlKabaashRoadLuxorDesc',
      image: AlKabaashRoadLuxorImg,
      category: 'infrastructure',
      tags: []
    },
    {
      id: 25,
      titleKey: 'projects.ElDabaaProjectsTitle',
      descKey: 'projects.ElDabaaProjectsDesc',
      image: ElDabaaProjectsImg,
      category: 'infrastructure',
      tags: []
    },
    {
      id: 26,
      titleKey: 'projects.NileCornicheLuxorTitle',
      descKey: 'projects.NileCornicheLuxorDesc',
      image: NileCornichLuxorImg,
      category: 'infrastructure',
      tags: ['Hospitality', 'Tourism']
    },
    {
      id: 27,
      titleKey: 'projects.ToshkaTitle',
      descKey: 'projects.ToshkaDesc',
      image: ToshkaImg,
      category: 'infrastructure',
      tags: ['Agricultural']
    },
    {
      id: 28,
      titleKey: 'projects.AdministrativeProsecutionLuxorTitle',
      descKey: 'projects.AdministrativeProsecutionLuxorDesc',
      image: AdministrativeProsecutionLuxorImg,
      category: 'infrastructure',
      tags: ['Administrative'],
      meta: {
        location: 'Luxor, Egypt',
        area: '20,000 square meters',
        owner: 'Ministry of Justice',
        year: 2023,
      }
    },
    {
      id: 29,
      titleKey: 'projects.QantaraPoliceDepartmentTitle',
      descKey: 'projects.QantaraPoliceDepartmentDesc',
      image: QantaraPoliceDepartmentImg,
      category: 'infrastructure',
      tags: ['Administrative'],
      meta: {
        location: 'Qantara, Ismailia',
        area: '15,000 square meters',
        owner: 'Ministry of Interior',
        year: 2023,
      }
    },
    {
      id: 30,
      title: 'Elnuby Administrative Headquarters',
      description:
        'The main administrative headquarters of Elnuby Group, featuring modern design and advanced administrative facilities.',
      image: NoubyAdministrativeHeadquarterImg,
      category: 'infrastructure',
      tags: ['Administrative'],
      meta: {
        location: 'Cairo, Egypt',
        area: '30,000 square meters',
        owner: 'Elnuby Group',
        year: 2023,
      }
    },
    {
      id: 31,
      title: 'Aswan Governorate Building',
      description:
        'An administrative building for Aswan Governorate, featuring modern design and advanced administrative facilities.',
      image: AswanGovernorateBuildingImg,
      category: 'infrastructure',
      tags: ['Administrative'],
      meta: {
        location: 'Aswan, Egypt',
        area: '25,000 square meters',
        owner: 'Aswan Governorate',
        year: 2023,
      }
    },
    {
      id: 51,
      title: 'Elsebaeya Fast Train Station',
      description:
        'A modern fast train station in Elsebaeya featuring advanced transportation infrastructure and administrative facilities.',
      image: AdministrativeProsecutionLuxorImg, // Using existing administrative image as placeholder
      category: 'infrastructure',
      tags: ['Administrative'],
      meta: {
        location: 'Elsebaeya, Egypt',
        area: '18,000 square meters',
        owner: 'Ministry of Transportation',
        year: 2023,
      }
    },
    {
      id: 52,
      title: 'Kalabsha Fast Train Station',
      description:
        'A state-of-the-art fast train station in Kalabsha with modern administrative and transportation facilities.',
      image: QantaraPoliceDepartmentImg, // Using existing administrative image as placeholder
      category: 'infrastructure',
      tags: ['Administrative'],
      meta: {
        location: 'Kalabsha, Egypt',
        area: '16,000 square meters',
        owner: 'Ministry of Transportation',
        year: 2023,
      }
    },
    {
      id: 53,
      title: 'El Baiyadia Parking',
      description:
        'A comprehensive parking facility in El Baiyadia with administrative offices and modern parking management systems.',
      image: NoubyAdministrativeHeadquarterImg, // Using existing administrative image as placeholder
      category: 'infrastructure',
      tags: ['Administrative'],
      meta: {
        location: 'El Baiyadia, Egypt',
        area: '22,000 square meters',
        owner: 'Ministry of Transportation',
        year: 2023,
      }
    },
    {
      id: 54,
      title: 'Kenoz City',
      description:
        'A modern administrative city development featuring government buildings, offices, and integrated administrative facilities.',
      image: AswanGovernorateBuildingImg, // Using existing administrative image as placeholder
      category: 'infrastructure',
      tags: ['Administrative'],
      meta: {
        location: 'Kenoz, Egypt',
        area: '45,000 square meters',
        owner: 'Ministry of Housing',
        year: 2023,
      }
    }
  ],
  education: [
    {
      id: 32,
      titleKey: 'projects.AlTodSchoolLuxorTitle',
      descKey: 'projects.AlTodSchoolLuxorDesc',
      image: AlTodSchoolLuxorImg,
      category: 'education',
      tags: ['Education'],
      meta: {
        location: 'Al-Tod, Luxor',
        area: '15,000 square meters',
        owner: 'Ministry of Education',
        year: 2023,
      }
    },
    {
      id: 33,
      titleKey: 'projects.FacultyofAlsunTitle',
      descKey: 'projects.FacultyofAlsunDesc',
      image: FacultyofAlsunImg,
      category: 'education',
      tags: ['Education'],
      meta: {
        location: 'Egypt',
        area: '25,000 square meters',
        owner: 'Ministry of Higher Education',
        year: 2023,
      }
    }
  ],
  various: [
    {
      id: 34,
      titleKey: 'projects.KarnakTempleSquareTitle',
      descKey: 'projects.KarnakTempleSquareDesc',
      image: KarnakTempleSquareImg,
      category: 'various',
      tags: ['Hospitality']
    },
    {
      id: 35,
      title: 'Karnak Park - Luxor',
      description:
        'A public park in Karnak, featuring modern design and integrated recreational facilities.',
      image: KarnakParkLuxorImg,
      category: 'various',
      tags: ['Entertament'],
      meta: {
        location: 'Karnak, Luxor',
        area: '20,000 square meters',
        owner: 'Luxor Governorate',
        year: 2023,
      }
    },
    {
      id: 36,
      titleKey: 'projects.AswanCornicheTitle',
      descKey: 'projects.AswanCornicheDesc',
      image: AswanCornicheImg,
      category: 'various',
      tags: ['Hospitality']
    },
    {
      id: 37,
      title: 'Tod Youth Hostel - Luxor',
      description:
        'A youth hostel in Al‑Tod, featuring modern design and integrated tourist facilities.',
      image: TodYouthHostelLuxorImg,
      category: 'various',
      tags: ['Hospitality', 'Tourism'],
      meta: {
        location: 'Al‑Tod, Luxor',
        area: '15,000 square meters',
        owner: 'Ministry of Youth and Sports',
        year: 2023,
      }
    },
    {
      id: 38,
      title: 'Rural Houses - El Tarf',
      description:
        'A rural housing complex in El Tarf, featuring modern design and integrated residential facilities.',
      image: ElTarfRuralhousesImg,
      category: 'various',
      tags: ['Residential'],
      meta: {
        location: 'El Tarf, Egypt',
        area: '50,000 square meters',
        owner: 'Private Sector',
        year: 2023,
      }
    },
    {
      id: 39,
      title: 'Elmostakbel City Haiksteb',
      description:
        'A modern residential complex in Cairo featuring luxury apartments with integrated amenities and green spaces.',
      image: ElTarfRuralhousesImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Residential'],
      meta: {
        location: 'Cairo, Egypt',
        area: '75,000 square meters',
        owner: 'Private Sector',
        year: 2023,
      }
    },
    {
      id: 40,
      title: 'Luxor Social Housing Project',
      description:
        'Premium coastal residential units in Alexandria with modern architecture and sea views.',
      image: ElTarfRuralhousesImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Residential'],
      meta: {
        location: 'Alexandria, Egypt',
        area: '45,000 square meters',
        owner: 'Private Sector',
        year: 2023,
      }
    },
    {
      id: 41,
      title: 'El Shams Club Compound',
      description:
        'Innovative smart housing development in Giza featuring sustainable design and modern technology integration.',
      image: ElTarfRuralhousesImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Residential'],
      meta: {
        location: 'Giza, Egypt',
        area: '60,000 square meters',
        owner: 'Private Sector',
        year: 2023,
      }
    },
    {
      id: 42,
      title: 'Al-Fayrouz Club - Ismailia',
      description:
        'A sports club in Ismailia, featuring advanced sports facilities and comprehensive service.',
      image: AlFayrouzClubIsmailiaImg,
      category: 'various',
      tags: ['Entertament'],
      meta: {
        location: 'Ismailia, Egypt',
        area: '25,000 square meters',
        owner: 'Ismailia Governorate',
        year: 2023,
      }
    },
    {
      id: 43,
      title: 'Malls West Shorouk',
      description:
        'A commercial malls complex in West Shorouk with modern retail spaces and integrated services.',
      image: MallsWestShoroukImg,
      category: 'various',
      tags: ['Commercial'],
      meta: {
        location: 'West Shorouk, Cairo',
        area: '60,000 square meters',
        owner: 'Private Sector',
        year: 2023,
      }
    },
    {
      id: 44,
      title: 'Luxor Temple Visitor Center',
      description:
        'A modern visitor center at Luxor Temple featuring interactive exhibits, information services, and tourist facilities.',
      image: KarnakParkLuxorImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Tourism'],
      meta: {
        location: 'Luxor, Egypt',
        area: '12,000 square meters',
        owner: 'Ministry of Tourism',
        year: 2023,
      }
    },
    {
      id: 45,
      title: 'Aswan Nubian Museum Extension',
      description:
        'Extension of the Nubian Museum in Aswan with additional exhibition halls and cultural tourism facilities.',
      image: AswanCornicheImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Tourism'],
      meta: {
        location: 'Aswan, Egypt',
        area: '8,000 square meters',
        owner: 'Ministry of Tourism',
        year: 2023,
      }
    },
    {
      id: 46,
      title: 'Cairo Citadel Tourism Complex',
      description:
        'A comprehensive tourism complex at Cairo Citadel featuring restaurants, shops, and cultural experiences.',
      image: GalalaUniversityHospitalImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Tourism'],
      meta: {
        location: 'Cairo, Egypt',
        area: '25,000 square meters',
        owner: 'Ministry of Tourism',
        year: 2023,
      }
    },
    {
      id: 47,
      title: 'Alexandria Maritime Museum',
      description:
        'A modern maritime museum showcasing Alexandria\'s rich naval history and maritime heritage.',
      image: LavidaHospitalImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Tourism'],
      meta: {
        location: 'Alexandria, Egypt',
        area: '18,000 square meters',
        owner: 'Ministry of Tourism',
        year: 2023,
      }
    },
    {
      id: 48,
      title: 'Sinai Desert Adventure Center',
      description:
        'An adventure tourism center in Sinai offering desert tours, camping facilities, and cultural experiences.',
      image: MansouraMilitaryHospitalImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Tourism'],
      meta: {
        location: 'Sinai, Egypt',
        area: '35,000 square meters',
        owner: 'Ministry of Tourism',
        year: 2023,
      }
    },
    {
      id: 49,
      title: 'Red Sea Coral Reef Center',
      description:
        'A marine tourism center dedicated to coral reef conservation and underwater tourism experiences.',
      image: ArmentHospitalImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Tourism'],
      meta: {
        location: 'Red Sea Coast, Egypt',
        area: '15,000 square meters',
        owner: 'Ministry of Tourism',
        year: 2023,
      }
    },
    {
      id: 50,
      title: 'Egyptian Pyramids Heritage Site',
      description:
        'A comprehensive heritage site development around the Egyptian pyramids with visitor facilities and cultural exhibits.',
      image: BedayatHospitalImg, // Using existing image as placeholder
      category: 'various',
      tags: ['Tourism'],
      meta: {
        location: 'Giza, Egypt',
        area: '80,000 square meters',
        owner: 'Ministry of Tourism',
        year: 2023,
      }
    }
  ]
};

// Map internal categories/tags to display labels
// Special rule: infrastructure items stay under Infrastructure except when tagged Administrative
const getDisplayCategory = (project) => {
  // Infrastructure first: only Administrative tag pulls it out
  if (project.category === 'infrastructure') {
    if (project.tags?.includes('Administrative')) return 'Administrative';
    return 'Infrastructure';
  }
  // Hospitals always show under Healthcare
  if (project.category === 'hospitals') return 'Healthcare';
  // Education under Education
  if (project.category === 'education') return 'Education';
  // For other categories (e.g., various) rely on tags
  if (project.tags?.includes('Administrative')) return 'Administrative';
  if (project.tags?.includes('Hospitality')) return 'Hospitality';
  if (project.tags?.includes('Commercial')) return 'Commercial';
  if (project.tags?.includes('Residential')) return 'Residential';
  if (project.tags?.includes('Tourism')) return 'Tourism';
  // Entertainment (previously Sports)
  if (project.tags?.includes('Entertament')) return 'Entertament';
  if (project.tags?.includes('Sports')) return 'Entertament';
  // Agricultural Land Reclamation
  if (project.tags?.includes('Agricultural')) return 'Agricultural Land Reclamation';
  return 'Project';
};

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [page, setPage] = useState(1);
  // Remove FilterBar, FilterButton, tagOptions, activeTag, and filteredProjects logic
  // Remove the <FilterBar>...</FilterBar> and the filteredProjects() grid from the return
  // Only keep the right-side icon navigation and the sectioned project grids

  // Refs for scrolling
  const infrastructureRef = useRef(null);
  const variousRef = useRef(null);
  const educationRef = useRef(null);
  const medicalRef = useRef(null);
  const administrativeRef = useRef(null);
  const hospitalityRef = useRef(null);
  const tourismRef = useRef(null);

  // Helper to scroll to ref
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // New navigation icons
  const pillFilters = [
    { key: 'all', label: 'All Projects', icon: FaGlobe },
    { key: 'Healthcare', label: 'Healthcare', icon: FaHospital },
    { key: 'Infrastructure', label: 'Infrastructure', icon: FaRoad },
    { key: 'Education', label: 'Education', icon: FaUserGraduate },
    { key: 'Administrative', label: 'Administrative', icon: FaBuilding },
    { key: 'Hospitality', label: 'Hospitality', icon: FaHotel },
    { key: 'Residential', label: 'Residential', icon: FaHome },
    { key: 'Commercial', label: 'Commercial', icon: FaShoppingCart },
    { key: 'Tourism', label: 'Tourism', icon: FaUmbrellaBeach },
    { key: 'Entertament', label: 'Entertainment', icon: FaMusic },
    { key: 'Agricultural Land Reclamation', label: 'Agricultural', icon: FaSeedling },
  ];

  // Pagination + filtering
  const pageSize = 6;
  const allProjects = [
    ...projectData.hospitals,
    ...projectData.infrastructure,
    ...projectData.education,
    ...projectData.various,
  ];
  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter((p) => getDisplayCategory(p) === activeCategory);
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + pageSize);

  // Filtered projects for each tag
  const getProjectsByTag = (tag) => {
    if (tag === 'Medical') {
      // Show all hospitals under Medical
      return [
        ...projectData.hospitals,
        ...projectData.infrastructure.filter(p => p.tags && p.tags.includes(tag)),
        ...projectData.various.filter(p => p.tags && p.tags.includes(tag)),
      ];
    }
    if (tag === 'Education') {
      return [
        ...projectData.education
      ];
    }
    if (tag === 'Administrative' || tag === 'Hospitality' || tag === 'Tourism') {
      // For other tags, only show from infrastructure and various
      return [
        ...projectData.infrastructure.filter(p => p.tags && p.tags.includes(tag)),
        ...projectData.various.filter(p => p.tags && p.tags.includes(tag)),
      ];
    }
    if (tag === 'Infrastructure' || tag === 'Roads And Infrastructure') {
      // Show all infrastructure projects under Roads And Infrastructure
      return [
        ...projectData.infrastructure
      ];
    }
    return [];
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" role="banner" aria-labelledby="projects-hero-heading">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#B45309]/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 right-32 w-16 h-16 border border-[#B45309]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-48 left-48 w-12 h-12 bg-[#B45309]/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 right-48 w-20 h-20 border-2 border-sky-400/20 rounded-full animate-ping" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#B45309]/20 to-orange-500/20 rounded-full border border-[#B45309]/30 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#B45309] rounded-full animate-pulse" />
              <span className="text-[#B45309] font-semibold text-sm tracking-wide uppercase">
                {i18n.language === 'ar' ? 'مشاريعنا' : 'Our Projects'}
              </span>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <h1 id="projects-hero-heading" className="text-5xl lg:text-7xl font-bold text-white mb-8 font-cairo leading-tight">
              <span className="bg-gradient-to-r from-white via-[#B45309] to-white bg-clip-text text-transparent">
                {i18n.language === 'ar' ? 'مشاريعنا المنجزة' : 'Our Completed Projects'}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-12 font-cairo leading-relaxed max-w-4xl mx-auto">
              {i18n.language === 'ar' 
                ? 'اكتشف مجموعة متنوعة من المشاريع المنجزة بنجاح في مختلف القطاعات'
                : 'Discover a diverse portfolio of successfully completed projects across various sectors'
              }
            </p>

            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B45309] to-transparent mx-auto rounded-full" />
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-12 max-w-6xl mx-auto"
            role="region"
            aria-labelledby="project-filters-heading"
          >
            <h2 id="project-filters-heading" className="sr-only">
              {i18n.language === 'ar' ? 'تصفية المشاريع' : 'Project Filters'}
            </h2>
            {pillFilters.map((pill) => {
              const isActive = activeCategory === pill.key;
              const IconComponent = pill.icon;
              return (
                <button
                  key={pill.key}
                  onClick={() => { setActiveCategory(pill.key); setPage(1); }}
                  className={`${isActive ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/90 text-[#132037] hover:bg-white'} 
                             rounded-2xl p-4 font-medium shadow-sm hover:shadow-md transition-all duration-300 
                             flex flex-col items-center justify-center gap-2 min-w-[90px] backdrop-blur-sm
                             border-2 ${isActive ? 'border-orange-400' : 'border-white/20 hover:border-orange-200'}`}
                  aria-label={`Filter by ${pill.label}`}
                  aria-pressed={isActive}
                >
                  <IconComponent className={`text-2xl ${isActive ? 'text-white' : 'text-orange-500'}`} />
                  <span className={`text-xs leading-tight text-center ${isActive ? 'text-white' : 'text-slate-700'}`}>
                    {pill.label}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Results summary (above the grid) */}
          <div className="mt-6 mb-2 text-center text-white font-medium">
            {i18n.language === 'ar' ? (
              <>
                تم العثور على <span className="text-white font-semibold">{filteredProjects.length}</span> مشروع
                <span className="text-white/80"> (الصفحة {currentPage} من {totalPages})</span>
              </>
            ) : (
              <>
                Found <span className="text-white font-semibold">{filteredProjects.length}</span> projects
                <span className="text-white/80"> (Page {currentPage} of {totalPages})</span>
              </>
            )}
          </div>

          {/* Cards Grid (filtered) */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.category}-${project.id}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_8px_30px_rgba(19,32,55,0.08)]"
                >
                  {/* Image with overlay badges */}
                  <div className="relative">
                    <div className="aspect-video bg-center bg-cover" style={buildBgStyle(project.image)} />
                    <span className="absolute top-3 left-3 inline-flex items-center text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2 py-1 shadow-sm">
                      {i18n.language === 'ar' ? 'مكتمل' : 'Completed'}
                    </span>
                    <span className="absolute top-3 right-3 inline-flex items-center text-xs font-semibold text-white bg-orange-500 rounded-full px-2 py-1 shadow-sm">
                      {getDisplayCategory(project)}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="px-5 pt-5 pb-2">
                    <h3 className="text-2xl font-bold text-[#132037]">{project.titleKey ? t(project.titleKey) : project.title}</h3>
                    <p className="mt-3 text-[#4b5563] leading-7">
                      {project.descKey ? t(project.descKey) : project.description}
                    </p>
                  </div>

                  {/* Meta (icons mimic reference) */}
                  <div className="px-5 pb-5 text-[#6b7280] space-y-2">
                    <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#132037]" /><span>{project.meta?.location || (i18n.language === 'ar' ? 'مصر' : 'Egypt')}</span></div>
                    <div className="flex items-center gap-2"><FaRulerCombined className="text-[#132037]" /><span>{project.meta?.area || '—'}</span></div>
                    <div className="flex items-center gap-2"><FaCalendarAlt className="text-[#132037]" /><span>{project.meta?.year || '—'}</span></div>
                    {project.meta?.owner && (
                      <div className="flex items-center gap-2"><FaBuilding className="text-[#132037]" /><span>{project.meta.owner}</span></div>
                    )}
                  </div>

                  {/* CTA row with year on the right */}
                  <div className="px-5 pb-5 flex items-center justify-between text-sm">
                    <a href="/projects" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700">
                      {i18n.language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                      <span>→</span>
                    </a>
                    <div className="flex items-center gap-2 text-[#6b7280]">
                      <FaCalendarAlt className="text-[#132037]" />
                      <span>{project.meta?.year || '—'}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Pagination (below grid) */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded border ${currentPage === 1 ? 'text-white/40 border-white/20' : 'text-white border-white/60 hover:bg-white/10'}`}
              aria-label="Go to previous page"
              aria-disabled={currentPage === 1}
            >
              {i18n.language === 'ar' ? 'السابق' : 'Prev'}
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`px-3 py-2 rounded border ${n === currentPage ? 'bg-white text-[#132037] border-white' : 'text-white border-white/60 hover:bg-white/10'}`}
                aria-label={`Go to page ${n}`}
                aria-current={n === currentPage ? 'page' : undefined}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded border ${currentPage === totalPages ? 'text-white/40 border-white/20' : 'text-white border-white/60 hover:bg-white/10'}`}
              aria-label="Go to next page"
              aria-disabled={currentPage === totalPages}
            >
              {i18n.language === 'ar' ? 'التالي' : 'Next'}
            </button>
          </div>

          {/* Note: Remaining titled sections removed in favor of a single filtered grid like the reference */}

          {/* Education Section removed per request */}

          {/* Medical Section removed per request */}

          {/* Administrative Section removed per request */}

          {/* Hospitality Section removed per request */}
        </div>
      </section>
    </>
  );
};

export default Projects; 