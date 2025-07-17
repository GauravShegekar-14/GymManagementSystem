import React from "react";
import {
  Star,
  BadgeCheck,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const trainers = [
  {
    id: 1,
    name: "Aarav Mehra",
    rating: 4.9,
    description: "Certified strength trainer with a focus on bodybuilding and weight training.",
    certifications: "ACE, ISSA",
    experience: "8 years experience • 1200 sessions",
    location: "Main Gym Hall",
    availability: "Mon-Fri: 6AM-2PM",
    image: "https://images.unsplash.com/photo-1600185365483-26f6bb3f6c78?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Nisha Roy",
    rating: 4.8,
    description: "Zumba and dance cardio expert helping clients burn calories with fun.",
    certifications: "Zumba Certified, Group X",
    experience: "6 years experience • 900 sessions",
    location: "Dance Studio",
    availability: "Mon-Sat: 8AM-4PM",
    image: "https://images.unsplash.com/photo-1603395075783-fffacbdedc4f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Lara Patel",
    rating: 5.0,
    description: "Yoga and wellness coach focused on flexibility and mindfulness. Transformed 100+ lives.",
    certifications: "RYT-500, Wellness Coach",
    experience: "10 years experience • 1400 sessions",
    location: "Yoga Studio",
    availability: "Mon-Sat: 5AM-12PM",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Rohan Desai",
    rating: 4.7,
    description: "HIIT specialist pushing limits with high-intensity workouts.",
    certifications: "ACE, CPT",
    experience: "5 years experience • 1000 sessions",
    location: "HIIT Zone",
    availability: "Mon-Fri: 7AM-1PM",
    image: "https://images.unsplash.com/photo-1594737625785-cbda0f56f589?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Simran Kaur",
    rating: 4.9,
    description: "Pilates instructor helping clients improve core strength and posture.",
    certifications: "Pilates Mat I & II",
    experience: "7 years experience • 1100 sessions",
    location: "Pilates Room",
    availability: "Mon-Sat: 6AM-12PM",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828b4b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Aditya Sharma",
    rating: 4.6,
    description: "Functional training coach focused on strength, mobility, and balance.",
    certifications: "NSCA-CPT",
    experience: "4 years experience • 800 sessions",
    location: "Functional Area",
    availability: "Tue-Sun: 9AM-5PM",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab8b6c79?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Priya Joshi",
    rating: 5.0,
    description: "Female fitness coach specializing in weight loss & toning programs.",
    certifications: "ISSA, Nutrition Coach",
    experience: "9 years experience • 1500 sessions",
    location: "Women’s Studio",
    availability: "Mon-Sat: 6AM-1PM",
    image: "https://images.unsplash.com/photo-1584467735871-c96830afde50?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Karan Verma",
    rating: 4.8,
    description: "CrossFit trainer with a passion for power and endurance training.",
    certifications: "CrossFit Level 1",
    experience: "6 years experience • 1000 sessions",
    location: "CrossFit Arena",
    availability: "Mon-Fri: 5AM-11AM",
    image: "https://images.unsplash.com/photo-1600180758890-6d84bfbf2dbb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Meena Iyer",
    rating: 4.9,
    description: "Mind-body expert blending yoga, pilates, and breathing techniques.",
    certifications: "RYT-200, Mindfulness Coach",
    experience: "11 years experience • 1600 sessions",
    location: "Zen Studio",
    availability: "Mon-Sun: 6AM-2PM",
    image: "https://images.unsplash.com/photo-1614285191957-cd4b15f4a25b?auto=format&fit=crop&w=400&q=80",
  },
];


const Trainers = () => {
  return (
    <>
    <Navbar />
  <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Meet Our Trainers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                <Star size={18} fill="#facc15" />
                <span className="text-sm font-semibold">{trainer.rating}</span>
              </div>
              <h2 className="text-lg font-bold mb-1">{trainer.name}</h2>
              <p className="text-sm text-gray-600 mb-3">{trainer.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <BadgeCheck size={16} />
                <span>{trainer.certifications}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <Clock size={16} />
                <span>{trainer.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <MapPin size={16} />
                <span>{trainer.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
                <Calendar size={16} />
                <span>{trainer.availability}</span>
              </div>
              <div className="flex gap-2">
                <button className="w-1/2 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-sm font-medium">
                  View Profile
                </button>
                <button className="w-1/2 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Trainers;
