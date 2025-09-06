import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Star } from "lucide-react";

const FeatureComparison = () => {
  const features = [
    {
      name: "Industry Expert Trainers",
      techInstitute: true,
      others: false,
      description: "Learn from professionals with 10+ years at top tech companies",
    },
    {
      name: "Small Batch Size (Max 20)",
      techInstitute: true,
      others: false,
      description: "Personalized attention and interactive learning environment",
    },
    {
      name: "Real-world Projects",
      techInstitute: true,
      others: true,
      description: "Hands-on experience with industry-standard projects",
    },
    {
      name: "100% Job Placement",
      techInstitute: true,
      others: false,
      description: "Guaranteed job assistance until successful placement",
    },
    {
      name: "Live Coding Sessions",
      techInstitute: true,
      others: false,
      description: "Interactive coding sessions with real-time feedback",
    },
    {
      name: "Interview Preparation",
      techInstitute: true,
      others: true,
      description: "Comprehensive preparation for technical interviews",
    },
    {
      name: "Lifetime Alumni Network",
      techInstitute: true,
      others: false,
      description: "Access to 5000+ alumni network for mentorship and opportunities",
    },
    {
      name: "Flexible Schedule Options",
      techInstitute: true,
      others: true,
      description: "Weekend and weekday batches available",
    },
    {
      name: "Capstone Project Mentoring",
      techInstitute: true,
      others: false,
      description: "One-on-one mentoring for final portfolio projects",
    },
    {
      name: "Industry Certification",
      techInstitute: true,
      others: true,
      description: "Recognized certification upon course completion",
    },
    {
      name: "Post-graduation Support",
      techInstitute: true,
      others: false,
      description: "Continued support even after course completion",
    },
    {
      name: "Guest Lectures from Industry",
      techInstitute: true,
      others: false,
      description: "Regular sessions with tech leaders and entrepreneurs",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose <span className="text-indigo-400">TechInstitute?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare our comprehensive approach with other institutes and see why we
            deliver superior results.
          </p>
        </div>

        <Card className="overflow-hidden bg-gray-800 border border-gray-700">
          <CardHeader className="bg-indigo-700 text-white">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <CardTitle className="text-xl">Features</CardTitle>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-lg">TechInstitute</span>
                </div>
                <Badge className="bg-secondary text-secondary-foreground mt-1">
                  Premium Choice
                </Badge>
              </div>
              <div className="text-center">
                <span className="font-bold text-lg">Other Institutes</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-4 items-center border-b border-gray-700 ${
                  index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                }`}
              >
                <div>
                  <div className="font-medium text-white mb-1">{feature.name}</div>
                  <div className="text-sm text-gray-400">{feature.description}</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center">
                    {feature.others ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <X className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "95% Placement Rate",
              description:
                "Highest placement rate in the industry with average 400% salary increase",
              icon: "📈",
            },
            {
              title: "5000+ Alumni Network",
              description:
                "Strong alumni network across 500+ companies for referrals and mentorship",
              icon: "🌐",
            },
            {
              title: "Lifetime Learning",
              description: "Free access to updated content and new courses for life",
              icon: "🎓",
            },
          ].map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-indigo-600 transition-all duration-300 bg-gray-800 border border-gray-700"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
