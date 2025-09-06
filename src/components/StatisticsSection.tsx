import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Trophy,
  Briefcase,
  GraduationCap,
  Star,
  TrendingUp,
  Globe,
  Clock,
} from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "5,000+",
      label: "Students Trained",
      description: "Successfully trained students across various technologies",
      color: "text-blue-400",
      bgImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Trophy,
      value: "95%",
      label: "Placement Rate",
      description: "Students placed in top companies within 6 months",
      color: "text-green-400",
      bgImage:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Briefcase,
      value: "500+",
      label: "Partner Companies",
      description: "Industry partnerships for placement opportunities",
      color: "text-purple-400",
      bgImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: GraduationCap,
      value: "50+",
      label: "Expert Trainers",
      description: "Industry veterans with hands-on experience",
      color: "text-orange-400",
      bgImage:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Student Rating",
      description: "Average rating from student feedback",
      color: "text-yellow-400",
      bgImage:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: TrendingUp,
      value: "₹8.5L",
      label: "Average Package",
      description: "Average salary package for our graduates",
      color: "text-red-400",
      bgImage:
        "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Students placed in companies worldwide",
      color: "text-cyan-400",
      bgImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Clock,
      value: "9 Years",
      label: "Experience",
      description: "Proven track record in tech education",
      color: "text-indigo-400",
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const achievements = [
    "Best Programming Institute Award 2023",
    "Top 10 EdTech Companies in India",
    "Excellence in Technical Education - 2022",
    "Industry Partnership Excellence Award",
    "Innovation in Learning Methodology",
  ];

  return (
    <section className="py-10 bg-gradient-to-b bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Impact in <span className="text-indigo-400">Numbers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nine years of excellence in technical education with proven results
            and industry recognition.
          </p>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="relative text-center hover:shadow-indigo-600 transition-all duration-300 group overflow-hidden rounded-xl"
              style={{
                backgroundImage: `url(${stat.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />

              <CardContent className="relative pt-8 pb-6">
                <div
                  className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-indigo-900/40 to-indigo-700/40 w-fit group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-200">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Awards & Recognition
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((achievement, index) => (
              <Badge
                key={index}
                className="bg-indigo-700 text-indigo-200 px-4 py-2 text-sm rounded cursor-default hover:shadow-indigo-600 transition-all duration-300 flex items-center gap-2"
              >
                <Trophy className="h-4 w-4 text-yellow-400" />
                {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
