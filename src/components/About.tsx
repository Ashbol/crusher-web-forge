
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Truck, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: Truck, label: "Deliveries Daily", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: Clock, label: "On-Time Delivery", value: "99%" }
  ];

  const certifications = [
    "Government Approved Crusher",
    "Environmental Clearance",
    "Quality Tested Materials",
    "ISO 9001:2015 Certified"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-blue-600">Crusher Business</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Established in 2009, we are Bangalore's leading supplier of premium construction materials. 
              Our state-of-the-art crusher plants and quality control processes ensure that every 
              load of sand, stone, and bricks meets the highest industry standards.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From small residential projects to large commercial developments, we've been the trusted 
              partner for contractors, builders, and developers across Karnataka. Our commitment to 
              quality, timely delivery, and competitive pricing has made us the preferred choice in the region.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold">Our Certifications & Approvals</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="border-blue-200 text-blue-700">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80" 
              alt="Crusher Plant Operations"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Serving Bangalore</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
