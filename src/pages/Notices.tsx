
import React from 'react';
import { Bell, Info } from 'lucide-react';

const Notices = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest Notices
            <span className="text-primary ml-2">•</span>
            <span className="text-lg text-primary font-normal ml-2">Purbanchal University</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with important announcements and notifications from Purbanchal University
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center py-16">
          <Bell className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-foreground mb-4">No Notices Available</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
            Website under process. This feature is coming soon. Stay connected for the latest updates from Purbanchal University.
          </p>
          <div className="p-4 bg-muted/30 rounded-lg border border-border max-w-lg mx-auto">
            <p className="text-sm text-muted-foreground">
              <Info className="w-4 h-4 inline mr-2" />
              We're working on integrating real-time notices from Purbanchal University. 
              Check back soon for important announcements and updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
