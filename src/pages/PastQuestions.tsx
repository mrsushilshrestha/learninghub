
import React, { useState } from 'react';
import { Search, Download, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PastQuestions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const semesters = [
    {
      id: 1,
      title: '1st Semester Questions',
      description: 'Previous year question papers for 1st semester',
      icon: <FileText className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1pyzDUBzYmyklqEEuPk6wkCniEkjXVJVK?usp=drive_link'
    },
    {
      id: 2,
      title: '2nd Semester Questions',
      description: 'Previous year question papers for 2nd semester',
      icon: <FileText className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1GVMPEzKJ8xkUppRVe88vg_DnKEj_8u6C?usp=drive_link'
    },
    {
      id: 3,
      title: '3rd Semester Questions',
      description: 'Previous year question papers for 3rd semester',
      icon: <FileText className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1bUtCvCeY-6uCRSQOVogqbt7h94kc2nyS?usp=drive_link'
    },
    {
      id: 4,
      title: '4th Semester Questions',
      description: 'Previous year question papers for 4th semester',
      icon: <FileText className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1JkrQizcIfdkxFnn1XNPsVFbUoSoEG-Y7?usp=drive_link'
    },
    {
      id: 5,
      title: '5th Semester Questions',
      description: 'Previous year question papers for 5th semester',
      icon: <FileText className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/11MdFDY6iaKLxbuqaQF1eY5IZIowTD6QG?usp=drive_link'
    },
    {
      id: 6,
      title: '6th Semester Questions',
      description: 'Previous year question papers for 6th semester',
      icon: <FileText className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1JkHluKhZpVH3gBl59fycr2VI8cKdyEDj?usp=drive_link'
    },
    {
      id: 7,
      title: '7th Semester Questions',
      description: 'Previous year question papers for 7th semester',
      icon: <FileText className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1OqS9wdt1yla3yIudTPJvIGouBIs6cdur?usp=drive_link'
    },
    {
      id: 8,
      title: '8th Semester Questions',
      description: 'Previous year question papers for 8th semester',
      icon: <FileText className="w-12 h-12 text-primary" />,
      driveLink: 'https://drive.google.com/drive/folders/1WtBh2PPrdBki8I-on8WEnH8WA6SkTh-x?usp=drive_link'
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
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Past Questions</h1>
          <p className="text-xl text-muted-foreground">
            Access previous year question papers for all semesters
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search past questions..."
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
                <CardDescription className="mt-2">
                  {semester.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center space-y-2">
                {semester.driveLink ? (
                  <Button asChild className="w-full">
                    <a href={semester.driveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Access Questions
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
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No past questions found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastQuestions;
