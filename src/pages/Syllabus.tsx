
import React, { useState } from 'react';
import { Search, Download, FileCheck, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Syllabus = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const semesters = [
    {
      id: 1,
      title: '1st Semester',
      description: 'Complete syllabus for 1st semester subjects',
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1A_9ejublRRWLtLOOFAuFH2K6YFTyU8-3?usp=drive_link'
    },
    {
      id: 2,
      title: '2nd Semester',
      description: 'Complete syllabus for 2nd semester subjects',
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1tC3IXVWei8lVUt1jsc5X58FoyJqlbGDU?usp=drive_link'
    },
    {
      id: 3,
      title: '3rd Semester',
      description: 'Complete syllabus for 3rd semester subjects',
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1LmqkCZGLwhc_t20ODj6e0kqB0muK7Zwq?usp=drive_link'
    },
    {
      id: 4,
      title: '4th Semester',
      description: 'Complete syllabus for 4th semester subjects',
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1JXrjbWgjlUAiiDsxEkcnWoyNIHvYyPWo?usp=drive_link'
    },
    {
      id: 5,
      title: '5th Semester',
      description: 'Complete syllabus for 5th semester subjects',
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1glR2WrvtpJoNk7aRdaWhelb87HyVi9ck?usp=drive_link'
    },
    {
      id: 6,
      title: '6th Semester',
      description: 'Complete syllabus for 6th semester subjects',
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/10qX4ts5aJ81OaRmwT_F4mOL-es3eVQ0J?usp=drive_link'
    },
    {
      id: 7,
      title: '7th Semester',
      description: 'Complete syllabus for 7th semester subjects',
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/19pIj2RxHiAwDze8r4LmH-MkeSwPUyYQ-?usp=drive_link'
    },
    {
      id: 8,
      title: '8th Semester',
      description: 'Complete syllabus for 8th semester subjects',
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1jY8CannaG4vNQhfVLImyg1HxLxAS_2a7?usp=drive_link'
    },
  ];

  const filteredSemesters = semesters.filter(semester =>
    semester.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    semester.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Syllabus</h1>
          <p className="text-xl text-muted-foreground">
            Access syllabus for all semesters
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search syllabus..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Semester Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredSemesters.map((semester) => (
            <Card key={semester.id} className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  {semester.icon}
                </div>
                <CardTitle className="text-xl text-primary">{semester.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                {semester.driveLink ? (
                  <Button asChild className="w-full">
                    <a href={semester.driveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </Button>
                ) : (
                  <Button className="w-full" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSemesters.length === 0 && (
          <div className="text-center py-12">
            <FileCheck className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No syllabus found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Syllabus;
