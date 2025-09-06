import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";

interface TrainerProfileProps {
  trainer: {
    id: string;
    name: string;
    title: string;
    avatar?: string;
    bio: string;
    experience: string;
    specializations: string[];
    education: string[];
    certifications: string[];
    companies: string[];
    rating: number;
    studentsCount: number;
    coursesCount: number;
    yearsExperience: number;
    location: string;
    email: string;
    phone: string;
    linkedIn?: string;
    github?: string;
    website?: string;
    achievements: string[];
    teachingPhilosophy: string;
    projects?: string[];
    availability?: string;
    languages?: string[];
  };
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden rounded-2xl border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
        {/* Header */}
        <CardHeader className="p-6 bg-gray-800/70 backdrop-blur-sm border-b border-gray-700">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-2xl font-extrabold overflow-hidden shadow-lg ring-2 ring-indigo-500"
            >
              {trainer.avatar ? (
                <img
                  src={trainer.avatar}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                trainer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              )}
            </motion.div>

            {/* Info */}
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-white">
                {trainer.name}
              </CardTitle>
              <p className="text-indigo-300 font-semibold italic">{trainer.title}</p>
              <div className="flex flex-wrap items-center gap-5 mt-3 text-sm text-indigo-400 select-none">
                <span className="flex items-center gap-1">
                  <MapPin className="h-5 w-5 text-indigo-400" /> {trainer.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-5 w-5 text-indigo-400" /> {trainer.yearsExperience}+ yrs experience
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="text-right select-none">
              <div className="flex items-center justify-end gap-1 text-yellow-400">
                <Star className="h-6 w-6 fill-yellow-400" />
                <span className="font-extrabold text-lg">{trainer.rating.toFixed(1)}</span>
              </div>
              <p className="text-xs text-indigo-400">{trainer.studentsCount}+ students</p>
            </div>
          </div>
        </CardHeader>

        {/* Body */}
        <CardContent className="p-6 space-y-6">
          {/* Bio */}
          <p className="text-sm text-gray-300 leading-relaxed">
            {expanded ? trainer.bio : trainer.bio.substring(0, 160) + "..."}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 text-center divide-x divide-gray-700 rounded-lg border border-gray-700 bg-gray-800/50 shadow-inner select-none">
            <div className="p-4">
              <p className="text-xl font-extrabold text-indigo-400">{trainer.studentsCount}+</p>
              <span className="text-xs text-gray-400 uppercase tracking-wide">Students</span>
            </div>
            <div className="p-4">
              <p className="text-xl font-extrabold text-indigo-400">{trainer.coursesCount}</p>
              <span className="text-xs text-gray-400 uppercase tracking-wide">Courses</span>
            </div>
            <div className="p-4">
              <p className="text-xl font-extrabold text-indigo-400">{trainer.yearsExperience}+</p>
              <span className="text-xs text-gray-400 uppercase tracking-wide">Years Exp</span>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-indigo-300">
              <Award className="h-5 w-5 text-indigo-500" /> Specializations
            </h4>
            <div className="flex flex-wrap gap-3">
              {(expanded ? trainer.specializations : trainer.specializations.slice(0, 4)).map(
                (spec, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-xs px-4 py-1 rounded-full text-indigo-400 border-indigo-500 hover:bg-indigo-700 hover:text-white cursor-pointer transition"
                  >
                    {spec}
                  </Badge>
                )
              )}
              {!expanded && trainer.specializations.length > 4 && (
                <span className="px-4 py-1 text-xs bg-indigo-600 rounded-full text-white font-semibold select-none">
                  +{trainer.specializations.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 overflow-hidden"
              >
                {/* Companies */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-indigo-300">
                    <Briefcase className="h-5 w-5 text-indigo-500" /> Experience
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {trainer.companies.map((company, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-indigo-700 text-indigo-200 px-4 py-1 rounded-full cursor-default"
                      >
                        {company}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-indigo-300">
                    <GraduationCap className="h-5 w-5 text-indigo-500" /> Education
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {trainer.education.map((edu, i) => (
                      <li key={i}>{edu}</li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-indigo-300">
                    <Award className="h-5 w-5 text-indigo-500" /> Certifications
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {trainer.certifications.map((cert, i) => (
                      <Badge
                        key={i}
                        className="text-xs bg-indigo-700 text-indigo-200 px-4 py-1 rounded-full cursor-default"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-indigo-300">Achievements</h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {trainer.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Teaching Philosophy */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-indigo-300">Teaching Philosophy</h4>
                  <p className="text-sm italic text-gray-400">"{trainer.teachingPhilosophy}"</p>
                </div>

                {/* Contact & Socials */}
                <div className="flex flex-wrap gap-3 border-t border-gray-700 pt-4">
                  <Button size="sm" className="flex-1 bg-indigo-700 hover:bg-indigo-600 transition text-indigo-200 flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" /> Email
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-indigo-600 text-indigo-400 hover:bg-indigo-700/50 flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" /> Call
                  </Button>
                  {trainer.linkedIn && (
                    <Button size="sm" variant="outline" className="flex-1 border-indigo-600 text-indigo-400 hover:bg-indigo-700/50 flex items-center justify-center gap-2">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Button>
                  )}
                  {trainer.github && (
                    <Button size="sm" variant="outline" className="flex-1 border-indigo-600 text-indigo-400 hover:bg-indigo-700/50 flex items-center justify-center gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </Button>
                  )}
                  {trainer.website && (
                    <Button size="sm" variant="outline" className="flex-1 border-indigo-600 text-indigo-400 hover:bg-indigo-700/50 flex items-center justify-center gap-2">
                      <Globe className="h-4 w-4" /> Website
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <Button
            className="w-full mt-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
            variant="default"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`trainer-details-${trainer.id}`}
          >
            {expanded ? "Hide Profile" : "View Full Profile"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TrainerProfile;
