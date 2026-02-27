import React, { useState, useRef, useEffect } from 'react';
import {
  GraduationCap,
  Trophy,
  Users,
  ArrowRight,
  Star,
  CheckCircle2,
  Globe,
  Briefcase,
  Zap,
  BookOpen,
  X,
  Calendar,
  Phone,
  MapPin,
  Search,
  Building2,
  Award,
  Sparkles,
  TrendingUp,
  Play
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Custom hook for scroll animation
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isAlreadyVisible) {
      setIsInView(true);
      return;
    }

    setIsInView(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

// --- Types & Data ---

export type TabType = 'home' | 'documents' | 'universities' | 'calculator' | 'studypath' | 'news' | 'fpt-landing' | 'vnu-landing' | 'rmit-landing' | 'hust-landing' | 'neu-landing' | 'uit-landing' | 'ftu-landing' | 'hmu-landing' | 'hnue-landing' | 'vlu-landing' | 'hsu-landing' | 'uef-landing' | 'hutech-landing' | 'gdu-landing';

interface UniversityPromo {
  id: string;
  tabId?: TabType;
  name: string;
  slogan: string;
  description: string;
  fullDescription?: string;
  logoUrl?: string;
  imageUrl: string;
  colorFrom: string;
  colorTo: string;
  features: string[];
  stats: { label: string; value: string }[];
  ctaText: string;
  tags: string[];
  deadline: string;
  gallery?: string[];
}

const FEATURED_UNIVERSITIES: UniversityPromo[] = [
  {
    id: 'rmit',
    tabId: 'rmit-landing',
    name: 'RMIT University Vietnam',
    slogan: 'Sẵn sàng cho sự nghiệp toàn cầu',
    description: 'Trải nghiệm nền giáo dục đẳng cấp quốc tế ngay tại Việt Nam. Cơ sở vật chất chuẩn Úc và mạng lưới kết nối doanh nghiệp rộng khắp.',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxMzM1MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-red-600',
    colorTo: 'to-pink-600',
    features: ['Bằng cấp chuẩn Úc', 'Môi trường 100% Tiếng Anh', 'Trao đổi sinh viên toàn cầu'],
    stats: [
      { label: 'Việc làm', value: '96%' },
      { label: 'Quốc gia', value: '50+' },
      { label: 'Ranking', value: 'Top 1%' },
    ],
    ctaText: 'Khám phá RMIT',
    tags: ['Quốc tế', 'Thiết kế', 'Kinh doanh'],
    deadline: '30/08/2026',
    gallery: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'hust',
    tabId: 'hust-landing',
    name: 'Đại học Bách khoa Hà Nội',
    slogan: 'Ngôi nhà của những Kỹ sư tương lai',
    description: 'Cái nôi đào tạo kỹ thuật hàng đầu Việt Nam. Tiên phong trong nghiên cứu khoa học, đổi mới sáng tạo và chuyển giao công nghệ.',
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUQEhIVFRUVFRUXFRUXFRUVFRYVFRYWFhUVFRgYHSggGBolHRcVITEhJSkrMC4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0mICUuMDcyLS0rLystLTIvKystLS8rLS0tLS0tLS0tLy0tLSstLSstLS8tLS0tLS0tLS0tLf/AABEIALABHgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEIQAAIBAwMCAwYDBQYFAwUAAAECEQADIQQSMQVBEyJRBjJhcYGRFKGxFSNCUnIzgpLB0fBiorLh8RazwgckJTRD/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADARAAICAQMCAwcEAgMAAAAAAAABAhEDEiExQVEEEyJhcYGhscHwIzKR0TPxBRRC/9oADAMBAAIRAxEAPwDpfw5p9hFWd1Cxr27PKpEANPSuCoS0U+REpFRtQm5QG5TSFYYqQGq3iUamhoEyeaRagFI1NFWJhUZSjL0BeqVkuhlWiIoaKaYgCKcUVMaAFTCnFOBQA0U0UdCRQAwaiimC0VADUgaalSAkBo91QzRTSaKTDpEUlNEBSGBFA1WdlROlCYNFdmpw9O1um8Or2I3CD0++onUiot1CQNl5KnEVnC7Unimk4gpEhu0JvVCxqMmq0k6mTNeqJnpop1WnSFuwd9GM0vDqVFpNlJDLaqZUpCnqGy0gWNRManim2U0xNEKinK1KcUJNFiojFEKRFMKYD09KKJVpACBUgWpEs0V1QolmCj4kD9alyKoi20itLxkPG9vittyPvFOl22TAcA+jSp+zRSsCMrQ1Ze0RUZSqUgoipRUm2hIp2KgKeKeKegCW0tWFWg09WNk1lJmkURMahY0dxajZaaBkbGmVqZgaBVNXRnYdyKquKs7KHwqpbCasrAVIlSm1RotNyEogm1QMkVf8Kq9+0alSKcSrIpt1MbZmprduqslWRrNTotSLaqQJUORaiAFpRR0aqKmyiEimIqVhUbNQhMjYUIFEaQFWSLbTBKkW2TVhNKealyoaVldFp9TdFu210idoGJiZIHP1pr2usp71wH+nP58fnWJ132hR7LWbaGG2+csOzA4UD4etVCMpSSoUpxiuQtT1a8yz4iWgU3KEENxIBZ+/9IrMvsU1VvLHz2mJJZmPnE85PHaqZ6/bRBbG1SLYRodQS0QSVVSSST3NRv1QXidQGnb3E/webv3zVYIPW064fVfQnLWlbPp0Z1+r3vdLMjsqiLY8JJRyBLbvxCzPrEicEZmj1nVMdPbt3C7XBcMsyBA20OOEJUH3eDmCa5e77XyTuuXZnIEjIxxu5xU9jqovAKGcwSfMSRJyeWOfN+tYeHivMj6ovfozXO35cvSzodE9xFUpcIlQdpIYTGfI8fka1NBr2uMbboFYDkEwcA8H5+tc3a6sgHhl2G0bTF0KMdiHRh/vtV3o2sVLjXMupGMoDkAH3FC+vatFCTk/7RhLJGMV046M6ILQslBZ11puGj+oR+YxVoLORkeoyKl7GyafBUK01W2tVC9umpA0Ct2KL8RULLQxTpE2y14tGriqdKaWkeossoqM0E0qdBYQajUVGFqxbWk2NAFKApVnbT+HU6iqJRaoLlurAp2WpsdFDwKIWKuLaqXwu9JyGolAWqc2q0Ftik1ulqHpMtrVMFNaJtVDqWS2u52Cj4/5epqlIlxKRQ062DUWo6vbAlVJwCu4G2GBMEqCNzQM4U1nXuruyjlDOdrBBGMAkFv+k5pSyKPLEoXwa9y2qiXYKJAkkASeBmo31NsKXAZgATIAC4JHvMQO1YSNdIgBjME7VI3MuAZMsDngEDOAKu6Xo+ouGTbIgYZzJPoJJmuaXi49NzVYZFy91ZVYhNhEiGl7gI7nyLAPwJqq/X7mx1ZCQ1t1hVUCWBh9xacAxG2pLnSFX+21NtfUAifsc/lUeo1ejVGVGdyQQPK8AkGMsBj6mpjnnJr0lSxpJ7nH9Se2Em6wCgjJ4nMVECpRSuVIBU+oPFTdXu2Ut7r8bNw5UuN2YxBzzUYdWtqye6wUriPKRIx2xXv40vN6XXx/0eLb8tc8/D/ZirZ0259zqzeZiAJK7WDscTxtP3NaHT71o2na3JUFpxBkKJAGO0Vm3dLpQzb70EsSQrAEE8jy59a0eleALLeDJQFt3vzO0bvezxFcvhsenI3pgtn1t/nc9DxOTVBK5PjpS/OxTvvpg3mtMWbzNByC0k7obB5xWj0zwpXw0Zd6luSRAYrByYbE/I1ROq0hJJQzJnGSTJP8VXumaiyW221IOeflnuew/KscL/Uj6ofBb/AedeiXpnx1f1Jr4tNcMuQ3ukRIwB/w+g9au9H0wRWCuHlpkfJRGCfSoS9reAzQVIORAmD3Ig4J+1XdBbVW8pBDHtGDnHP+4q8cWszemPXdP6o580k8SWqXTZr6MG09vxiN6+IJlZG7I9OeM10XStayKVUDLySQGAEKAI3A9jxPIrnx+H/Ex5Rf+TBj5Z5iD5fj2rc0elR53XTbYRGCQRmZ9O33rLNLTBtd+heCLc1bfHX84NUdW/mRD8d7W/8A3lVf+arVu4j8K4BCmdu5ZYKY3ISsgtBzEg/Os4dNc/2V+0+BjdmYzxPf9fhUL6DULLtZlgQJTLEeoIzHH3+dcH/Za5R6Hle00ktpcE23R/6WB/TigbSEdqyjq5O1wwYZi4u44BzuYbxAB4I4q9puoQAAZAImGLSBPlAu7iJnnd2Fax8XF9TJ4n1Q7WaE26mTqAJhlU8ZB2ET/wAL4P8Adcn4VZFoMNwBGY8ylTPyPzFdEcqZm4Gf4dOLdTtboQtaaidJHsqW3T7Klt26lyKSEomrCWqdLdTqtZSkaKJCgqRT8P0qQrAk+vFRlpqrsXAgv0p5NMBUltalghKtHFSBKciobLSMTqfWVtNsFt3f5FU/xEZ/ug/SuT1N68WZghEHzETuER71xjuX6FZnNehXrSsIIBHof94rxPrupu3bzi9cL7XZYk7BtYr5VmFGKcMOTLKlKkTKcY8o7u77P3gx3XbVpJkOTLP33Ad/v/rRtd0NhRcYl4CgvcbwrZIEFhvjPwj5Vz+l6bqryhrusXT24MW7FovqCoEHc7mLZwIhuIxVL/8AFWCXvi1fuhoDXme8xXhQbVskF+5LYJPauJ40rvodClxRun2/UyunRrgkqBp7JuNuiSCWwe2QIqr1DW9TuRu0jWkaAh1FwkFzxuRSptqOS3Aih0PV9RduTotFcZtm2FFvShLc+WdowhOQDzE0Wv0fUCy+I+ms7mVYRxduISffuK0qVAmYycVpFJTS9n2Jbelsr3ui6wj9/wBSsWvVNPYa5PoN+0GY+NULXRbMi7evatrm4EIHHgBgfJlpZhgTx3rWu+zaMp8bqWpvEcrZTwR8AQTtIrK0/RtAu25ctM1/dIZrvhKGk7CiLO6PLicn51WLj4onI/oyfqmotW033YC7gMqW8xBjAB+NQG4rIrL7rAFTEYIkY7Yq31EWtv77Ztke/t2zmPexPNVbhXapSNsDbtjbHaIxEV9Djb19PueDGtC5+xzlz2aVnZ2usAzFoAAic8k/Gtrpent27WxH3KJkypzGZIxNcxqOi6l7jsNoBZtpZhxJg4mO1dL0nRm3bKGMmcEke4qnkeoNcnho/qOsVbPd/nU9HxEvRvkvjb87Fe7pNIzl2YbiST+8YZ74Bq7oNPZQ/uzk/wDETODxPwJrIHs7d73lk8+T1Bnv8a3NPoguyIlQBPc+VlP5kfas8ccqnG8CSvldCsksThL9Zt1x3JLmmR7oYvDARtBXODBI5nzVd0GhNthndMZiJ8zH/wCQH0rM1ekuO8qViBgk9p+Ecx9q0Ok6VwSWEe9xEGNpHH1qUqz/AOOt3uZTd4P8l7LYuM2n8cA7PG7Yh8qRgxnE96sarQeLEai7ZKzBtjcreouDcJGMc8mgv2dP4qu+wXcbSSA/cCMyeSKsajp1m9C3fFESVNpgGB7zPbFRn/ZIvBWuJQ0mj1W3y6uwSMFbyssxy28J39JxFWtPrtejhPBDmJUaa6WVgJkiC0wBMGg0PQyAR+Nu2yCQoZWvAoBILg43czEiivaHVLcRRd09/cDtZl8MAj+cY2yODnIrz5K8j/Oh3J1BfnUvt7XlTsvWriNMBb1g98kDbnt6VPavaG8A6hQwEjwngfDcmMd+JrP6ne1SW9up09zw2ZRuF4XLc5japkLkCOO1Ra+5oryMty2lq4BJJtmw4MzLhfIfqPWsaVK+rNLdtewc9atb2BLINzTuWVAk8FJP5fWup0uh2qGRyAQCI4MiZ28H6ivO1sQxgyASAw4Men616L00/wD29r4IB9sV3y8LCDTi2ceLPKdqSJLq1GEqU0xrQoALRqtIVIopNjRIgqZVqNBU6is2aIrFSe9GqKOT9qka3XP9T9oUVvCsAXbhO0Z/dhiYALDkz2H1IqpTSVtmaTNm5qbdtS7kADksYX4f+KraDqyXdzKGCqQAxEbj3heR25H0rh9Yz3FN7VXCh3KLakSYJcPttSCB5QNw5mSTW37NdZsjRX7fhfuk3yblwK7eIp7jAJIAgHvg4ArL9We8I7d2VcI/uZ09nqdgtsF1N3oTBPynn6VdIrzfTfgXdJu37a4DJcIdCC0k7yGYYPJbgDFWem6PWIR+F1Nu5b3QfDuAqgJG3dbeVHJmDPHripKUf3poIzUv2uzvCteKt067e1F0WlmLtwkyAq+c5JOB2H1Fd1Y9qb0tav2WQ7mQXUDI+5TG5bb+8O+4ECK4bqV614z2jdII84ZbaKu9sqCR5iOCRkT2nnF+P8i1Dd1/HvCWLXVmjd6Lpwqvrb165E+Jae81jTKMhQohTLeUyYkbomKPQe0OnsEpprW65ukG3YD3gpAITfcjygbQINV212xV3G2zEN+8IDWyu4ANABhS7GZnJA+W/wBL6jct2ill3cyzFEW2jnbBbaoGF83Yye3IFcEPFvfX1fw/g1apozbGo6hqbri3pyXgG6L7wVBEWy6eXkTEHsKHXdL1YZFuaqwNxVStrYzWhj94VMsQB2DZq3p9LqL9wxLhlBbxN7N5hAOSIOCImcY7iqmv6FqXcKdTbg7QAoDi35gN2eQB6NOCa7I54a17uvuBxen4/cPUdC0hBW9rtTfI5AlfkIusRWbo+m6FFD3NO7X59+dibpJQqFmQIHPep7/QdIJF/qly4P5ba3TH5uv5Cs7R9P6eq+Jdt3WuzI8MKqCI2xu2nsDXTixTcdl1RnOUb56Mm6x4d0Gy6ltpDHzbcwYz35NVrbkbbYChFWBDSQAIAiP86XU7IuSksvmB3K21sDifSlZtBQAOwgE5P1PevdjB69VfE8hNKFfL7mS/Vru9lAAAZgDA/hMSZmtPpWodrblzJDGDAGNqnEAd5qdEVTwAT8gSTU1m+rSVYMByQQY+1Y4sGSOTVPLfs/Gb5c2OUKjjrjcz9Pcuxlic+r+sdjVmxcfemSQSd3vEe6xEzxkCpk11skgOpImQDJESTP2P2NTW9Qp4Mzx6ff6H7VzY/C6Zp+e37L5+Zrl8Vqg15KW3Pb5FTVa1kvBd0K2305LKsDHOZ57GtjomrZ7rWiBgMJiCSNo9ce9VZbqgwzKPmQP1rT0G3cHXbIiCI44iR8hj4VcsU/Mclk27HN5uPQovHv3InGlvFH1Aa26wQyXBcQQdw52sc/Cta7o9NfC7yb9tsobUghgSp3BgIiDj4ijb2X0t5kw9vj+zuMo57qZU8elH1/pGmsBLV8u9kjcNoAYEnaJBwRg/4uK5stO4x5fzOrG3s3wvkZmg6LaUuPxF6z5j4cEzGT+8CES3yo7/AE68r2zb1guKxI3XEFsLkQWLgtHPBNUOn6TSB3A1V6ys/uyqtJDEk+JtUDGIgjFWDoiLtvwtfbuBpG5wLewzI3eIzNBzwOc965pYpKdtdPsdEZxcNn1+5d6imrs2jcdbL25UNct3I5IAkyccdqPq3W5stb1lq6q7SJu29wBPcORvn5DtQdR0ustWzdPgOoKy6OXIEgbp8vY9hRavrGpt2WW/p9TsZCGgG8pVgeW91RHxrmqop78/0b8ya9n9nPq4DEITtnHIn4x616D0z+wt/wBP+ZrzlWUvKiFMQO4xXonRzOnt/I/9Rr1sy2TPM8M/U0WWFRmpopttYWddEaCp0FMoqZFpNjSCtirKLUaLVhFrJs1SOC6r1K5eE3G/D6c7xtmLr7eQe5/pGOZnFc1qOvLbNtLC7SPL4hVS8lpMfwrGIGT6VDds6nUMbmSqu29yQqBZAlmaAondgRwcGKPpfs/phbjxBddGBTY2y0GfcFfe4BuAMdoCjJK5gzWvlwx+rJu/kvh/Zza5SXp2RhWdQ7m6P41AA7+YrKyTk4216D/9PFizqJ9I/wCQzVJtKXuBPDUW1lkVLWxCCIaWLF2cEQS3pwIM6vSri6dLpUbvFOFG0BQUz37QT2jv3icn/I4dGlvnf58e8jyXqtAa3pllsm0oJ5K+Q/dYri+kXL7eKxtHTXLO0qzkgHfKkqXgiAJmTz2rstPdZwWZiiiQZ2EycjK4BA5H61i6Sy9xSJMbh5nVpUeYMVnBI2kCDj8qyy+JuKjurT/KHGFGZ1vS3lCzd23HjYgQuXWMsWOQfNwCOTzIA5qxaVGULIIkwVKkgSNxbM5JYAH0HcTvvtVfDt3C10nc3Z22khbaN3O7sDgAnFLTWV2Wkk29+/ci5LTENuKmGIBHBjAGTNeVtGL6nbGytpbpcoAshWaIwo8oBweAMgTyT6iK6HR3Ltu7b9LcEKeTswoXJEG2xTC8HGa5vV6W8o8d9xVsDYuQ0lQx4CEGe3rwas6EqSLYVmeMEgRuMFdoI4MDkA8czWE1aNaOh1+rv3EYsrG20sIwj5J2BtuCAxGRMKAMqamGiW6PPeUFbZln3rtCbYcARld6+sG5Bwc4+nt3GYtbWHA3ACE2kkbgG7fSBg94qbR6gmQVIXb4k7QrJBlgCvlCmJEyePqoZJY2pR5XYiUE1TKx0llbrb9Qvgom9rqo7SCVUBVGT5nAmpBqOlmQt3UufVbYQAkhRO8+pFagt6Rp3BntsPDZgxDbQVu7mAELlCST2Vu+Bd0XRulMH8OzecoVLea7IYbtv8YH82K9qP8AyM89aZNbK1xuc8MEIp6kcN7RLcC7rLNvBhlhSCDAG3BIiTJ/SqPTNFfFxbly4Tg7kJJgkEesela3UdVbtsTcaJ+DGfsKPpvXbDEWls+IxzJESASTBbg8D6fGvbloUk9Tb7WcUNbhVUu9GBqegO117iui7mJGJIzM8c/L71v9J6N4Kuvi2fM24ANwCAoA5kCOav2faZW82ywkkGGRiVgkwNvHJn/xA/8Aqd1O2yLdxi7XNuRll2tlwcR6559a4oZcEZ3Ber3vr8Deccso1Lj3GVe9mBvLfiLZmTA3lQZMRxnPyxV3QdJFtAPGQlSMywmZ90EYHmz8qt6T2mUAzdRSYLLsckbQggNtkf2a5Hz5pr/tWwuK9pku3AW2rDIPPO7lYGPSOO5rKL8PqWlb9Oef4NJPO4u+Hzx/Y93RcuHtnEbd5BPmEGIyPpxU/S9GVvbzEQQIMxIHwHcVDY9qfKFY2lKjbtKsYhdkHG14GASDxjkzZ03tSgIULbck3I2qf/6NvJMlZ28DOBjvNUpYXk1V6r7mclm8vR/5rsUf2Z1XThTZus0chXL7YiIRgQ0549K6DV612sp+O33CpKnagtOV8pUwYByxz3igte3WlX3w6Mu4eZPeg49yQI+A71p6LU2tQ9tmXxUhpVlK8iRi4Bwc05N031+glylW31Ofv/gmUi0L63IO3eFK7owDDcTTdM0enuWwX1Itv3Uq0AdvNEZHxrr9X0nSRuOmuJGQyFcR3ADwftWT7NdH0t2yWYXT52CuA+UABSQAQGg5xWMM+VYm9W9o2ngxvIlW1MwhowL4tJetwwkXQ+1P4hBbscR/eFaWtfV6e1Jv77ZhcXBdXzkKJBnGan1nRdMNTatreYByQysjKyiCQ4LKARIA470XWPZi2EZreotEgTtYhSQHRyAZMnyQBGcVfnSbhdb87LuZ+RFKem1XG/sMW50q6oDtbZVgGYhYiZ9AIrueg/8A61s/A/8AUaybXQdUbCNbvFlZbbFBccSpKll2kR7u4RNa/sxbI0qIwhl3KwPIZTDA/Wqed5Iu+jFDAsck0+UXQlCVqwRtUsQSFBJjnAnFYb9ecsAumIBIzcbbieYMfrUpmraXJqrU9sVW6bq0uSGhCO26Qfr2q/vsrzdT5Agn7ColJFxRIi1ZRKy9V1iyglTujmZQAessM/IVW/8AUn9CjsZ5njnFc+TLGPJoqPPr/TbrlGv3Qir7niET4fuotu3zwCZUcSck5HTrp7LBFL3y7OEZlNpdrbmyWIYESRG2CF7SI6K5prRJa+yboMMDtncDkxk4jkniqn4HSi06orE72ZfLJUkvKgwSo87YIyOSeKifj4ZItNP3dOhgsTRga3qZLAeNbG8r/LvQg8ECJyYyY7zR9JQoTduvuDe6UYsxAiYCypTzEEAiDPPe/b6Jba34oJiPcMDgZ2jd5m3DAP2HNFrunt4Vtk8zKdm/3QRgBNsHcFCDMxJPrtHEnFP0muknOrLFlS20WwJKLuwYkkCAPIvrAA9KoW+oXnQpb3ABUBZkKkRIaBB3ACT3MfGImXUXgNyOFKuCJAe5OFIBYAFDklcLPaqnUdLe3bWbIGQpOMegE4kE/T4xtK5bsSgg9Y9trhHhKHtSxa5yy7Wky3JKkSeSWgd657wnIZEEo8lVUgrIxJIBI4GDH51pW7ZULuKgGJO3duzjcO47xnNa2l0dtV3I4G0AuFQ+8JALszROYgAYNczi4m6MzRszWAGVBtB3iSzscyh3HgmW7x5cyMyarSi01opZVh298MBHBAMY90nvPHetK1atuisNgI2yrBvOzLucSQZlgxGf4T8q0bFh9qywYEbiAAN7navlPYkRxEknGZrJqmMzNE4uL4rBIMEE9mRSpBILR7sDdg+Y9yazJvSZTzLBlkDQAC485HoRAnMnsau63ba1DFFZF7+Qgo2AA6kwwMc9931qzcUvaAJl8IMm3GW7ggETA+Z+IFNY637iZK+jRwudgBL3AhCqykHzE9hI3Zg81j9V0bqTeFy4Rcu29vO1Uh4EcgYMk8/c1vaC3u3DxCFMeWSFAQgtGJ4Agz3+9s6IAOvmIdnDFhgnawABU+VfMO04NKDeOVomjk9Tplv24MgNB4hhkEfLio7GhW3AHac4nMn/ADogLqM91sqSdyzmSYkenatPp9jxgCIWQSAeSRPlA7kx2r6nH4iDqc1TPOlhlFaU9jJt9DsXPMovsN24kIsAzMT37/l8Ysfsi1a3EG4HJB23LcAgDadrDEd5+nzxtbbubzLMRJ2ySYWYAE8DFH043FcQ5AnImVPxKnBjkTwYNcPnRhk1aeGdzxycKs1P2NYJ8ovMA4cwqhQxGRJxz8f+znpti2SR4isxkK4ESRtMH7/cVZ1HX2VigtIwVvKTvBjtwcCIx8aVv2huFdqWrYgTgPiSBM7/AIioWVKSkor+SHHK40Q3egWWCbWusZFx2W2oQMw3bN3BiYn4etK/0i1bdLh8QMpkBl96SOMD/f1jN6vZvPeJJZtwDAZIG7kLPAmQPlQ9Is3N6je20nK7jtMeo4PaniyKWROuppKEtHPQ3X6MlxQCSMHiJ80eoPpWprtMjJse4ttcHc0xjMYyeIqnrdS1pUKqGBB/i2xEcSM1P1K66bTsVlgzIDdysncIHeuvNOGmTjycOKM043x0Mfdbt3VknaGBBgqrAEe6GycfCrGi8Xw1Fm5tTClg5WXGPosR2kyKm1OtR5LadZO1QfSIjbH1ER6fOpNG9u2BvRmPYTtUyOBHPA5/OvFlKWlqz0nG5JsO1auveturlnDOgbeT5/LG0sBAw3fk9pirnXNLrDai7JXEz4ZyCCuQSeQKT6sM6XlO0W2O4B9xIDKVI480buw94+tP1v2iaDbtvcBK5BCMCpAOCCYxP/aunHlWmG9tGen9yrkkttd8MIUtkAIJKeZUlRJK5naea2fY1Y0gVz5gSTJH8qySZ9Zz8DXnruCBtkERglYkdxiQY7yT+g0NEbpyDImSCcE4zBkT/pU+fkjfaw0Lb2Ho2q1FoWn8wPkbAI3EERIHcf6Vyya6yYAVgOx2K0/0rnvJ/P1qtreo3GjxbKgqPKyg9xgkmZnn41Vd32Bp275G4CMDkA9s8/KsMufI/wBrobgjd0dmAzyhUgZKtAI3A5tyB2z/AKVSOqKHcibtpaQrMQM/xbxjggd8/Cn6HeYq25jAjO4KZ42zHDYj1iqGs6nd3ELcNpSSOSXzkz6/E04eIk41LkSQep629xQkEe7uwokj1HpgQMVkXbpJiQOD3jjHHz7RUTqDPPM8j85p8kcflNOt7HRvalwzL5Co77ewgYXjHzqUafUKguBCcTuCtAWJMkD3Y+PrXV2uk7AVG9ZwTtkxB7rPrTN0yYAvgYwN0HHwIp6I9jTScrbF1QrBJ8p823MmfOSBnmO2T9y0OgLW22+UCScsN8FBtjiQGJ47V193pt52BLkgdgRB9THFDd6dd8QvBEkHEY4wI+IB+lW9HYWk5a30lU24ypOc7QFIAx2JJBx6ms+7pGZjLS0AEtAhh6egkR6+tdxf0NxolZgAAkcRz24MD70VrTOsg4UgggzGYntjihzVVQlCuTgT0lJAYzu3Rxx27d6YdJkbexz9VkAfnXo+msKFAIBgjho9YkgfrUOs0KlgyoJIMz5hEiMNjtT1x7Dp9zh9P0w+FM8vGMEALmP8WfXPrTabRTae3HDgn5Kjkx9gPpXXv0mUCyPeYmQvcL9uKtP020UKogQsIJEtOM/ripk4vgdM4i3pF3b3kxtAmSdigzBPoIxjikhukMPNtEsoBgKQMZj6dp+FdrpukIFKeGdxEFyCQcg+6cdh9qX7FUh12e8MNEbYgREwfX60qj2HRx2lvPBuOSxBVYkkwTJie+CZmn1Goa5ZdSgALJ3LcljJkZ93867Cx0EBSpRSf5jOYEAEA9s5p19nvf8AdAaIABIEAj/OaNELugaOIFkBQjIPL6LzOfMe5q9obAQg7W8wBgAQBkyRxwK6V/Z0584/wmrB6Sd26R8uPlW2Sdx0oiONXbOFvezwc7ixHONhxJJg55zQL7NhTIePmINd83TW+H3qFujNzisrfU2dVscPd9my5LG4M/8ADOO2Qakt+zygmXGREBIiCp9fhXbfsgxwKD9kN6D7ihNhSo45OjHdi6QfLwgB8rbh35nNCvQQmQ5JGQNsZ+9dmOkv6D71IemN6D7002nsLZqmcHqNIzrBDAieRzxx3/OrVjQAgKRPk4MFc3HIMCP9xXW3ujsf4fzFMejPunHyntn/AFq4Tp7mUsdqkck+hWDBWZ4AXMcCKhZAsYyc8EiO/eea65PZwggiMcZprvs4TGRj4U5ODXAKDXU5G3YVhtVYA5EAAyO/r7o59Kjbp6HCATkYx8669uhPk8yR2j1/1pW+iXA0hQP07/Wn5npSDy9zj/2YVPnUAkcRnIMH71Z0/TSw3KAO0TjESc/7xXXjozE7io+AJJ/Wfn9al0/RyvAHfvz86zlTTK0nPWdCw9+4CpgCCeCu6Y+pB+Mc1Q1egIbAlQJBHH9Q+Ndo/SwSS3ftI9I9Zpv2cPVuI7duPnWPlhpOW6ToyA4MhWUBgJnMQRkZHcHnNUNV0UhpA94E+vfjnJ+wrt/2en8rcz25+9B+DUGdjmPVv+/xpKDTsKOQt9EZVwASQDGZ4M7exzGaJOhtIUjbg4AE4jkEfHmuyK4jw4ERHaCCD/F8TUK6TIi0MCBOcY9W+A+5qtMgo6HbTNbB5APzqSKUVqWVjo0/lA+WP0pfhfRnH96R+dWYpRRQECo4/in5qP8AKpAW+H50cUopUAM/7mnp4pRRQDU1FFKKdCBps0cUopUBHBpbakilFOhkcUxFSxTRQBGFoooopRSADbS20cUttAEcUoo9tKKYAQPSltHpRxS20ABHwpRRxSikAG2lt+FHFKKYAbfhT7aPbT7aAIfD9TTeAKninigRALA9P86f8OKnpUAQiwPSjCxR0qAHilFPSpgNFNFFSoAGKeKelQAMU9PSoAGlRUqAGimiipUANSp6VADU0UVKgAYpRRUqABimijpUABFKKOlQAMUooqVAARSijilFAAxSiiimigBopRTxSigBopRT09AAxSiipUANFKKelQB//9k=',
    colorFrom: 'from-red-700',
    colorTo: 'to-orange-700',
    features: ['Đào tạo Kỹ sư chất lượng cao', 'Hợp tác doanh nghiệp chặt chẽ', 'Phòng Lab hiện đại'],
    stats: [
      { label: 'Việc làm', value: '98%' },
      { label: 'Nghiên cứu', value: '#1 VN' },
      { label: 'Đối tác', value: '200+' },
    ],
    ctaText: 'Trở thành Kỹ sư BK',
    tags: ['Kỹ thuật', 'Công nghệ', 'Nghiên cứu'],
    deadline: '15/07/2026',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'neu',
    tabId: 'neu-landing',
    name: 'Đại học Kinh tế Quốc dân',
    slogan: 'Dẫn đầu tư duy - Kiến tạo tương lai',
    description: 'Trường đại học trọng điểm quốc gia về đào tạo kinh tế, quản lý và quản trị kinh doanh. Môi trường năng động, hội nhập quốc tế.',
    imageUrl: 'https://images.unsplash.com/photo-1666243035395-9b7853cecc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpb25hbCUyMGVjb25vbWljcyUyMHVuaXZlcnNpdHklMjB2aWV0bmFtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxNDc5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-blue-800',
    colorTo: 'to-indigo-900',
    features: ['Top 1 đào tạo Kinh tế', 'Mạng lưới Alumni quyền lực', 'Cơ sở vật chất hiện đại'],
    stats: [
      { label: 'Việc làm', value: '98%' },
      { label: 'Doanh nghiệp', value: '500+' },
      { label: 'Ranking', value: '#1 Kinh tế' },
    ],
    ctaText: 'Trở thành SV NEU',
    tags: ['Kinh tế', 'Quản trị', 'Tài chính'],
    deadline: '20/07/2026',
    gallery: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'uit',
    tabId: 'uit-landing',
    name: 'Đại học Công nghệ Thông tin',
    slogan: 'Bứt phá trong kỷ nguyên số',
    description: 'Trường đại học trọng điểm về đào tạo CNTT và Truyền thông. Môi trường học tập năng động, sáng tạo với hệ sinh thái công nghệ chuẩn quốc tế.',
    imageUrl: 'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwY29kaW5nJTIwZGFyayUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzcxNDgwMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-cyan-600',
    colorTo: 'to-blue-700',
    features: ['Chuyên sâu về AI & Security', 'Đối tác của Google, Microsoft', 'Thực tập ngay từ năm nhất'],
    stats: [
      { label: 'Việc làm', value: '100%' },
      { label: 'Lương KĐ', value: '$1000+' },
      { label: 'Giải thưởng', value: 'Top 1' },
    ],
    ctaText: 'Trở thành SV UIT',
    tags: ['Công nghệ', 'AI', 'Cyber Security'],
    deadline: '25/07/2026',
    gallery: [
      'https://images.unsplash.com/photo-1565687981296-535f09db714e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'fpt',
    tabId: 'fpt-landing',
    name: 'Đại học FPT',
    slogan: 'Khát vọng đổi thay',
    description: 'Trường đại học tiên phong đào tạo Kỹ sư CNTT theo chuẩn quốc tế. Chú trọng ngoại ngữ, kỹ năng mềm và thực tiễn doanh nghiệp.',
    imageUrl: 'data:image/jpeg;base64,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',
    colorFrom: 'from-orange-500',
    colorTo: 'to-orange-600',
    features: ['Thực tập tại doanh nghiệp (OJT)', 'Giáo trình chuẩn quốc tế', 'Campus xanh hiện đại'],
    stats: [
      { label: 'Việc làm', value: '100%' },
      { label: 'Quốc tế', value: '15%' },
      { label: 'Lương KĐ', value: '$$$' },
    ],
    ctaText: 'Săn học bổng FPT',
    tags: ['CNTT', 'Kinh tế', 'Ngôn ngữ'],
    deadline: '20/08/2026',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'vnu',
    tabId: 'vnu-landing',
    name: 'Đại học Quốc gia Hà Nội',
    slogan: 'Đạt đỉnh cao tri thức',
    description: 'Trung tâm đào tạo, nghiên cứu khoa học và chuyển giao công nghệ đa ngành, đa lĩnh vực chất lượng cao hàng đầu đất nước.',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwdmlldG5hbXxlbnwxfHx8fDE3NzEzMzUyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-blue-700',
    colorTo: 'to-indigo-800',
    features: ['Đa ngành đa lĩnh vực', 'Đội ngũ GS, PGS đầu ngành', 'Cơ hội nghiên cứu chuyên sâu'],
    stats: [
      { label: 'Ranking', value: '#1 VN' },
      { label: 'Ngành học', value: '100+' },
      { label: 'Nghiên cứu', value: 'Top 1' },
    ],
    ctaText: 'Khám phá VNU',
    tags: ['Đa ngành', 'Hàn lâm', 'Uy tín'],
    deadline: '10/08/2026',
    gallery: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1000'
    ]
  }
];

// --- Helpers ---

const getIconColorClass = (colorFrom: string) => {
  if (colorFrom.includes('blue')) return 'text-blue-500';
  if (colorFrom.includes('slate')) return 'text-slate-500';
  if (colorFrom.includes('purple')) return 'text-purple-500';
  if (colorFrom.includes('red')) return 'text-red-500';
  if (colorFrom.includes('orange')) return 'text-orange-500';
  return 'text-blue-500';
};

// --- Sub-components ---

const UniversityModal = ({ uni, onClose, onNavigate }: { uni: UniversityPromo; onClose: () => void; onNavigate: (tab: TabType) => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      <div
        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl flex flex-col md:flex-row overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in-95 slide-in-from-bottom-4"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Visuals (40%) */}
        <div className="md:w-2/5 relative h-64 md:h-auto min-h-[400px]">
          <div className={`absolute inset-0 bg-gradient-to-br ${uni.colorFrom} ${uni.colorTo} opacity-40 mix-blend-multiply z-10`} />
          <ImageWithFallback src={uni.imageUrl} alt={uni.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-8 z-20 text-white w-full bg-gradient-to-t from-black/80 to-transparent">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-3 border border-white/30 uppercase tracking-widest">
              Tuyển sinh 2026
            </div>
            <h2 className="text-3xl font-bold leading-tight mb-2 text-white">{uni.name}</h2>
            <p className="text-white/90 italic text-sm border-l-2 border-white/50 pl-3">{uni.slogan}</p>
          </div>
        </div>

        {/* Right Side: Content (60%) */}
        <div className="md:w-3/5 p-8 md:p-10 overflow-y-auto bg-white">
          <div className="flex flex-wrap gap-2 mb-6">
            {uni.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-bold mb-3 text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" /> Giới thiệu chung
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              {uni.fullDescription || uni.description}
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {uni.stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100 group hover:border-blue-100 hover:shadow-md transition-all">
                <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${uni.colorFrom} ${uni.colorTo}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 uppercase font-bold mt-1 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Admission Info */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100/50">
            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" /> Thông tin tuyển sinh
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-blue-200/50">
                <span className="text-slate-600 font-medium">Hạn nộp hồ sơ</span>
                <span className="font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">{uni.deadline}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Hình thức xét tuyển</span>
                <span className="font-bold text-slate-800">Học bạ & Điểm thi THPT & ĐGNL</span>
              </div>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                if (uni.tabId) {
                  onNavigate(uni.tabId);
                  onClose();
                }
              }}
              className={`flex-1 py-4 rounded-xl bg-gradient-to-r ${uni.colorFrom} ${uni.colorTo} text-white font-bold text-base shadow-xl shadow-blue-200 hover:shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1`}
            >
              <Zap className="w-5 h-5" /> {uni.ctaText}
            </button>
            <button className="px-6 py-4 rounded-xl border-2 border-slate-100 hover:bg-slate-50 font-bold text-base text-slate-600 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Nhận tư vấn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UniversityCard = ({ uni, index, onOpen, onNavigate }: { uni: UniversityPromo; index: number; onOpen: (uni: UniversityPromo) => void; onNavigate: (tab: TabType) => void }) => {
  return (
    <div
      className="group relative bg-white/90 backdrop-blur-sm rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-slate-100 hover:border-blue-200 h-full flex flex-col cursor-pointer transform hover:-translate-y-3 hover:rotate-[0.5deg]"
      onClick={() => onOpen(uni)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] -z-10 blur-sm"></div>

      {/* Image Header */}
      <div className="relative h-56 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${uni.colorFrom} ${uni.colorTo} opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10 mix-blend-overlay`} />
        <ImageWithFallback
          src={uni.imageUrl}
          alt={uni.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

        {/* Floating badge with animation */}
        <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider group-hover:scale-110 transition-transform">
          <GraduationCap className="w-3 h-3 text-blue-600 animate-pulse" />
          Tuyển sinh 2026
        </div>

        {/* Stats overlay on hover */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {uni.stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs shadow-lg">
              <span className="font-bold text-slate-900">{stat.value}</span>
              <span className="text-slate-500 ml-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-8 flex-1 flex flex-col relative bg-white">
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(59,130,246,0.05) 50%, transparent 75%)', backgroundSize: '200% 100%', animation: 'shimmer 3s infinite' }}></div>

        {/* Floating Logo Placeholder - in real app would be actual logo */}
        <div className={`absolute -top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${uni.colorFrom} ${uni.colorTo} shadow-xl flex items-center justify-center text-white font-bold text-xl border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
          {uni.name.charAt(0)}
        </div>

        <div className="mt-6 mb-2 relative z-10">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all line-clamp-1">
            {uni.name}
          </h3>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1 flex items-center gap-2">
            <Sparkles size={10} className="text-yellow-500" />
            {uni.tags.join(' • ')}
          </p>
        </div>

        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed relative z-10">
          {uni.description}
        </p>

        {/* Key Features List - Enhanced */}
        <div className="space-y-3 mb-8 relative z-10">
          {uni.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium group/feat hover:translate-x-2 transition-transform">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${uni.colorFrom.replace('from-', 'from-').replace('-600', '-100').replace('-700', '-100').replace('-800', '-100')} ${uni.colorTo.replace('to-', 'to-').replace('-600', '-100').replace('-700', '-100').replace('-800', '-100')} flex items-center justify-center shrink-0 group-hover/feat:scale-110 transition-transform`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${getIconColorClass(uni.colorFrom)}`} />
              </div>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* CTA - Enhanced */}
        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
          <span className="text-xs font-bold text-red-500 bg-gradient-to-r from-red-50 to-orange-50 px-3 py-1.5 rounded-full border border-red-100 flex items-center gap-1">
            <Calendar size={10} /> Hạn: {uni.deadline}
          </span>
          <button
            className={`w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-600 group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-blue-300/50 group-hover:scale-110 group-hover:rotate-[-15deg]`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSpotlight = ({ onOpen, onNavigate }: { onOpen: (uni: UniversityPromo) => void; onNavigate: (tab: TabType) => void }) => {
  const spotlightUni = FEATURED_UNIVERSITIES[0]; // RMIT

  return (
    <div className="relative w-full rounded-[40px] overflow-hidden mb-24 shadow-2xl group cursor-pointer border-2 border-slate-200 hover:border-blue-300 transition-colors">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={spotlightUni.imageUrl}
          alt={spotlightUni.name}
          className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />

        {/* Animated particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-bounce opacity-40" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-30" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce opacity-50" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-white">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-5 py-2 rounded-full text-xs font-bold mb-8 shadow-xl shadow-red-900/50 uppercase tracking-widest group-hover:scale-110 transition-transform"
          >
            <Trophy className="w-4 h-4 animate-pulse" />
            Đối tác chiến lược
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight">
            RMIT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 animate-gradient bg-[length:200%_auto]">University</span>
          </h2>

          <p className="text-slate-300 text-xl mb-10 max-w-xl leading-relaxed font-light">
            Tiên phong giáo dục chuẩn Úc tại Việt Nam. Trang bị tư duy toàn cầu cho thế hệ lãnh đạo tương lai.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (spotlightUni.tabId) onNavigate(spotlightUni.tabId);
              }}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-500 hover:to-pink-500 transition-all shadow-xl shadow-red-900/30 flex items-center gap-2 hover:-translate-y-2 hover:shadow-2xl group/btn"
            >
              <Zap className="w-5 h-5 group-hover/btn:animate-pulse" /> Khám phá ngay
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpen(spotlightUni);
              }}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-2 hover:-translate-y-1 group/btn2"
            >
              <Play size={18} className="group-hover/btn2:scale-110 transition-transform" /> Xem chi tiết
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-slate-300 text-sm font-medium border-t border-white/10 pt-8 max-w-lg">
            {[
              { value: '96%', label: 'Có việc làm' },
              { value: '50+', label: 'Quốc gia' },
              { value: 'Top 1%', label: 'Thế giới' },
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col gap-1 group/stat hover:scale-110 transition-transform cursor-default">
                  <span className="text-3xl font-bold text-white group-hover/stat:text-red-400 transition-colors">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400">{stat.label}</span>
                </div>
                {i < 2 && <div className="w-px h-10 bg-white/20"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Export ---

interface UniversityPromotionsProps {
  setActiveTab: (tab: TabType) => void;
}

export const UniversityPromotions = ({ setActiveTab }: UniversityPromotionsProps) => {
  const [selectedUni, setSelectedUni] = useState<UniversityPromo | null>(null);
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

      {/* Decorative shapes */}
      <div className="absolute top-40 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-30" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-60 right-40 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-30" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-30" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>

      {/* Rotating ring */}
      <div className="absolute top-1/2 right-20 w-40 h-40 border-2 border-dashed border-blue-200 rounded-full animate-spin opacity-20" style={{ animationDuration: '25s' }}></div>

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto relative z-10"
      >

        {/* Section Header - Enhanced */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 shadow-lg shadow-blue-100/50 border border-blue-200/50">
            <Globe className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} /> Mạng lưới giáo dục
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Đối Tác <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient bg-[length:200%_auto]">Chiến Lược</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Kết nối trực tiếp với 200+ trường đại học hàng đầu, mang đến cơ hội học bổng và thông tin tuyển sinh chính xác nhất.
          </p>

          {/* Quick stats */}
          <div className="flex justify-center gap-8 mt-10">
            {[
              { icon: <Building2 size={18} />, value: '200+', label: 'Trường đối tác' },
              { icon: <Award size={18} />, value: '50+', label: 'Học bổng' },
              { icon: <TrendingUp size={18} />, value: '$500M', label: 'Giá trị HB' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-lg font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Spotlight */}
        <HeroSpotlight onOpen={setSelectedUni} onNavigate={setActiveTab} />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_UNIVERSITIES.slice(1).map((uni, index) => (
            <UniversityCard
              key={uni.id}
              uni={uni}
              index={index}
              onOpen={setSelectedUni}
              onNavigate={setActiveTab}
            />
          ))}
        </div>

        {/* CTA Banner - Enhanced */}
        <div className="mt-32 relative rounded-[40px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-12 md:p-20 text-center group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center group-hover:opacity-15 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>

          {/* Animated shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-sm font-bold mb-6 text-blue-300 group-hover:scale-110 transition-transform">
              <Award size={30} className="text-yellow-400 animate-pulse" /> Tư vấn miễn phí <span className="text-lg text-green-400 font-extrabold drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">
                100%
              </span>
            </div>
            {/* <h3 className="text-xl md:text-5xl font-bold mb-6 leading-tight">Bạn đang <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">BĂN KHOĂN</span> chọn trường?</h3> */}
            <div className="text-center mb-6">
              <h3 className="text-3xl md:text-4xl font-semibold text-white">
                Bạn đang
              </h3>

              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text my-2">
                BĂN KHOĂN
              </div>

              <h3 className="text-3xl md:text-4xl font-semibold text-white">
                chọn trường?
              </h3>
            </div>
            <p className="text-slate-300 mb-10 text-xl max-w-2xl mx-auto">
              Để lại thông tin để được chuyên gia tư vấn lộ trình ôn thi và xét tuyển phù hợp nhất với năng lực của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <div className="relative flex-1 group/input">
                <input
                  type="text"
                  placeholder="Nhập số điện thoại của bạn..."
                  className="w-full px-6 py-4 rounded-2xl text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/50 pl-12 bg-white shadow-xl"
                />
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within/input:opacity-20 transition-opacity pointer-events-none"></div>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-900/50 hover:-translate-y-1 hover:shadow-2xl whitespace-nowrap flex items-center gap-2 group/btn">
                <Sparkles size={18} className="group-hover/btn:animate-spin" style={{ animationDuration: '1s' }} />
                Đăng ký ngay
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> Bảo mật thông tin</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> Phản hồi trong 24h</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> 100% miễn phí</span>
            </div>
          </div>
        </div>

        {/* Modal Overlay */}
        {selectedUni && (
          <UniversityModal uni={selectedUni} onClose={() => setSelectedUni(null)} onNavigate={setActiveTab} />
        )}

      </div>
    </section>
  );
};