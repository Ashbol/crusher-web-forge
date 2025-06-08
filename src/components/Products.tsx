
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const productCategories = [
    {
      id: "sand",
      title: "Premium Sand",
      description: "High-quality sand varieties for all construction needs",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      types: ["M Sand", "River Sand", "Plastering Sand", "Concrete Sand"],
      features: ["Silt Free", "Graded Quality", "Washed & Cleaned"]
    },
    {
      id: "stones",
      title: "Construction Stones",
      description: "Crushed aggregates in various sizes for concrete and construction",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      types: ["6mm Aggregate", "12mm Aggregate", "20mm Aggregate", "40mm Aggregate"],
      features: ["Angular Shape", "High Strength", "Dust Free"]
    },
    {
      id: "bricks",
      title: "Quality Bricks",
      description: "Durable bricks and blocks for residential and commercial projects",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
      types: ["Clay Bricks", "Fly Ash Bricks", "Cement Blocks", "Hollow Blocks"],
      features: ["Uniform Size", "High Strength", "Weather Resistant"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We supply premium construction materials sourced from our own crusher plants, 
            ensuring consistent quality and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Available Types:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.types.map((type, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Quote for {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
