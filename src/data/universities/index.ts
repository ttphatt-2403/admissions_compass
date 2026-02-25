import hanoiData from './hanoi.json';
import tphcmData from './tphochiminh.json';
import danangData from './danang.json';

export interface Score {
  [key: string]: number;
}

export interface Major {
  code: string;
  name: string;
  scores: Score;
  quota: number;
  trend: 'up' | 'down' | 'stable';
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;
  type: string;
  website?: string;
  majors: Major[];
}

// Merge universities from all cities
export const allUniversities: University[] = [
  ...hanoiData.universities as unknown as University[],
  ...tphcmData.universities as unknown as University[],
  ...danangData.universities as unknown as University[]
];

// Get all unique cities/locations
export const getAllLocations = (): string[] => {
  const locations = new Set(allUniversities.map(uni => uni.location));
  return Array.from(locations).sort();
};

// Get universities by location/city
export const getUniversitiesByLocation = (location: string): University[] => {
  return allUniversities.filter(uni => uni.location === location);
};

// Search universities by name, shortName, or location
export const searchUniversities = (query: string): University[] => {
  const lowerQuery = query.toLowerCase().trim();
  return allUniversities.filter(uni =>
    uni.name.toLowerCase().includes(lowerQuery) ||
    uni.shortName.toLowerCase().includes(lowerQuery) ||
    uni.location.toLowerCase().includes(lowerQuery)
  );
};

// Get majors from a specific university
export const getMajorsByUniversity = (universityId: string): Major[] => {
  const university = allUniversities.find(uni => uni.id === universityId);
  return university?.majors || [];
};

// Filter majors by score range and specific block
export const filterMajorsByScore = (
  majors: Major[],
  minScore: number,
  maxScore: number,
  block: string
): Major[] => {
  return majors.filter(major => {
    const score = major.scores[block];
    return score !== undefined && score >= minScore && score <= maxScore;
  });
};

// Get all available score blocks across all majors
export const getAllScoreBlocks = (): string[] => {
  const blocks = new Set<string>();
  allUniversities.forEach(uni => {
    uni.majors.forEach(major => {
      Object.keys(major.scores).forEach(block => blocks.add(block));
    });
  });
  return Array.from(blocks).sort();
};

// Pagination hook
export const usePagination = (
  items: University[] | Major[],
  itemsPerPage: number = 10
) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  return {
    totalItems,
    totalPages,
    getPage
  };
};

// Get university by ID
export const getUniversityById = (id: string): University | undefined => {
  return allUniversities.find(uni => uni.id === id);
};

// Get trending majors (up/down/stable)
export const getTrendingMajors = (trend: 'up' | 'down' | 'stable'): Major[] => {
  const trendingMajors: Major[] = [];
  allUniversities.forEach(uni => {
    uni.majors.forEach(major => {
      if (major.trend === trend) {
        trendingMajors.push(major);
      }
    });
  });
  return trendingMajors;
};

// Get top universities by number of high-score majors
export const getTopUniversities = (limit: number = 5): University[] => {
  const scored = allUniversities.map(uni => ({
    university: uni,
    avgScore: uni.majors.reduce((sum, major) => {
      const scores = Object.values(major.scores);
      return sum + (scores.length > 0 ? scores.reduce((a, b) => a + b) / scores.length : 0);
    }, 0) / uni.majors.length
  }));
  
  return scored
    .sort((a, b) => b.avgScore - a.avgScore)
    .slice(0, limit)
    .map(item => item.university);
};
