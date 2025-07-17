import React from "react";
import { CalendarDays, Clock, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const gymClasses = [
  {
    title: "Morning Yoga Flow",
    instructor: "Sarah Johnson",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
    description: "Start your day with gentle yoga flows and mindfulness.",
    schedule: "Mon, Wed, Fri",
    time: "07:00 AM (60 min)",
    enrolled: "15/20 enrolled",
  },
  {
    title: "HIIT Cardio Blast",
    instructor: "Mike Chen",
    level: "Advanced",
    levelColor: "bg-red-100 text-red-700",
    description: "High-intensity interval training for max calorie burn.",
    schedule: "Tue, Thu",
    time: "06:00 PM (45 min)",
    enrolled: "12/15 enrolled",
  },
  {
    title: "Zumba Dance Party",
    instructor: "Alicia Rivera",
    level: "Intermediate",
    levelColor: "bg-yellow-100 text-yellow-700",
    description: "Dance and sweat it out with fun Zumba moves.",
    schedule: "Mon, Wed",
    time: "05:30 PM (50 min)",
    enrolled: "18/25 enrolled",
  },
  {
    title: "Strength Training",
    instructor: "David Lee",
    level: "Advanced",
    levelColor: "bg-red-100 text-red-700",
    description: "Build muscle with guided strength exercises.",
    schedule: "Tue, Thu",
    time: "07:30 PM (60 min)",
    enrolled: "10/15 enrolled",
  },
  {
    title: "Pilates Core Focus",
    instructor: "Emma Watson",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
    description: "Improve core strength and posture with Pilates.",
    schedule: "Mon, Fri",
    time: "09:00 AM (45 min)",
    enrolled: "14/20 enrolled",
  },
  {
    title: "Boxing Basics",
    instructor: "Carlos Mendes",
    level: "Intermediate",
    levelColor: "bg-yellow-100 text-yellow-700",
    description: "Learn the fundamentals of boxing & conditioning.",
    schedule: "Wed, Sat",
    time: "06:00 PM (60 min)",
    enrolled: "11/20 enrolled",
  },
  {
    title: "Spin Class",
    instructor: "Lara Griffin",
    level: "Advanced",
    levelColor: "bg-red-100 text-red-700",
    description: "High-energy cycling session to boost stamina.",
    schedule: "Tue, Thu",
    time: "07:00 AM (45 min)",
    enrolled: "16/18 enrolled",
  },
  {
    title: "Stretch & Relax",
    instructor: "Ravi Kumar",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
    description: "Gentle stretches to relax your mind and body.",
    schedule: "Sun",
    time: "08:00 AM (30 min)",
    enrolled: "20/25 enrolled",
  },
  {
    title: "CrossFit Conditioning",
    instructor: "Jen Carter",
    level: "Advanced",
    levelColor: "bg-red-100 text-red-700",
    description: "CrossFit sessions for elite performance and strength.",
    schedule: "Mon, Wed, Fri",
    time: "06:30 AM (60 min)",
    enrolled: "9/12 enrolled",
  },
  {
    title: "Functional Fitness",
    instructor: "Neil Patel",
    level: "Intermediate",
    levelColor: "bg-yellow-100 text-yellow-700",
    description: "Functional movements to improve daily activity strength.",
    schedule: "Tue, Thu",
    time: "05:00 PM (45 min)",
    enrolled: "13/20 enrolled",
  },
];

const GymClassCard = ({ gymClass }) => {
  return (
   
    <div className="border rounded-xl shadow-md p-6 space-y-4 bg-white">
        
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold">{gymClass.title}</h2>
        <span
          className={`text-sm px-3 py-1 rounded-full font-medium ${gymClass.levelColor}`}
        >
          {gymClass.level}
        </span>
      </div>
      <p className="text-sm text-gray-600">with {gymClass.instructor}</p>
      <p className="text-sm text-gray-700">{gymClass.description}</p>
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          <span>{gymClass.schedule}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{gymClass.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>{gymClass.enrolled}</span>
        </div>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
        Book Class
      </button>
    </div>
  );
};

const GymClassList = () => {
  return (
    <>
    <Navbar />
    <div className="text-center py-10 bg-gray-50">
        <h1 className="text-5xl font-bold">Fitness Classes</h1>
        <p className="text-2xl mt-5 ">Discover our wide range of fitness classes designed to help you<br/> achieve your goals</p>
    </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">

      {gymClasses.map((gymClass, index) => (
        <GymClassCard key={index} gymClass={gymClass} />
      ))}
    </div>
    <Footer />
    </>
  );
};

export default GymClassList;
