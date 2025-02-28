import { MapPin, Phone, Globe, Mail, Briefcase, Users } from 'lucide-react';

const CompanyInfo = () => {
  const services = [
    {
      title: 'บริการจัดหางาน',
      titleEn: 'Employment Services',
      icon: '👥'
    },
    {
      title: 'การบริการด้านพนักงานขับรถผู้บริหาร',
      titleEn: 'Executive Car Driver',
      icon: '🚗'
    },
    {
      title: 'บริการพนักงานขาย, แนะนำสินค้า',
      titleEn: 'Promotion Lady, BA, PC Service',
      icon: '🎯'
    },
    {
      title: 'บริการพนักงานในสำนักงาน',
      titleEn: 'Office Service',
      icon: '💼'
    },
    {
      title: 'บริการรับจ้างเหมาพนักงานในภาคอุตสาหกรรม',
      titleEn: 'Manufacturing Manpower Service',
      icon: '🏭'
    },
    {
      title: 'การให้บริการรับทำเงินเดือน',
      titleEn: 'Payroll Service',
      icon: '💰'
    }
  ];

  return (
    <section id="company" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ข้อมูลสถานประกอบการ</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/src/public/images/img7.jpg"
                alt="Thitaram Group"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">บริษัท ทิตาราม คอนซัลแตนท์ จำกัด</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" />
                  <span>
                    สำนักงานใหญ่ อาคาร ทิตาราม
                    เลขที่ 9/89 ซอยรัชประชา 3
                    ถนนรัชดาภิเษก แขวงลาดยาว
                    เขตจตุจักร กรุงเทพฯ 10900
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600 flex-shrink-0" />
                  <span>02-032245 ต่อ 441-446</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-blue-600 flex-shrink-0" />
                  <span>www.thitaramgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600 flex-shrink-0" />
                  <span>customer_mkt@thitaram.com</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-600">
                  บริษัท ทิตาราม กรุ๊ป ก่อตั้งขึ้นในปี พ.ศ. 2532 (1989) โดยเริ่มต้นจากการให้บริการด้านการจัดหาบุคลากร
                  ตลอดระยะเวลามากกว่า 30 ปี บริษัทได้ขยายขอบเขตการให้บริการครอบคลุมด้านการจัดการทรัพยากรบุคคลอย่างครบวงจร
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <Briefcase className="text-blue-600" />
                <h3 className="text-2xl font-semibold">บริการของเรา</h3>
              </div>
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <p className="font-medium text-gray-800">{service.title}</p>
                        <p className="text-sm text-gray-500">{service.titleEn}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <Users className="text-blue-600" />
                <h3 className="text-2xl font-semibold">ลูกค้าของเรา</h3>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-100">
                <img
                  src="/src/public/images/img4.jpg"
                  alt="Our Clients"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;