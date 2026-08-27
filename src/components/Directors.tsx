import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Award, Briefcase } from "lucide-react";

const Directors = () => {
  const directors = [
  
 
  ];

 
        {/* Company Leadership Highlights */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-industrial mb-4">Leadership Commitment</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our leadership team embodies <strong>youthful energy, resilience, and unwavering commitment</strong> to client growth and success. 
              Together, we drive innovation while maintaining the highest standards of service delivery and business ethics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/50 rounded-lg p-6">
                <h4 className="font-bold text-industrial mb-2">Diverse Leadership</h4>
                <p className="text-muted-foreground">Promoting gender diversity in executive positions</p>
              </div>
              <div className="bg-white/50 rounded-lg p-6">
                <h4 className="font-bold text-industrial mb-2">Youth-Driven Innovation</h4>
                <p className="text-muted-foreground">Fresh perspectives driving industry transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;
