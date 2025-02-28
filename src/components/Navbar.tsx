import { Building2, LayoutDashboard, ClipboardList, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-colors">
              <Home size={20} />
              <span className="text-xl font-bold">รายงานการฝึกงาน</span>
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#company" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Building2 size={20} />
              <span>ข้อมูลสถานประกอบการ</span>
            </a>
            <a href="#organization" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <LayoutDashboard size={20} />
              <span>แผนผังองค์กร</span>
            </a>
            <a href="#tasks" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <ClipboardList size={20} />
              <span>งานที่ได้รับมอบหมาย</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;