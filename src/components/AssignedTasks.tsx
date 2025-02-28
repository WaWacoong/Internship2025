import { useState } from 'react';
import { 
  CheckCircle,
  Clock,
  X,
  GraduationCap,
  Calendar,
  BookOpen,
  Video
} from 'lucide-react';

interface Subtask {
  title: string;
  status: string;
  assignee: string;
  module: string;
  tester: string;
  devDate: string;
  finalTest: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
  duration: string;
  status: string;
  subtasks: Subtask[];
}

const AssignedTasks = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const tasks = [
    {
      id: 1,
      title: "Video App 989Velaa",
      description: "สร้างสื่อคู่มือการใช้งาน App 989Velaa",
      duration: "มิ.ย. 67-ส.ค. 67",
      status: "เสร็จสมบูรณ์",
      subtasks: [
        {
          title: "วิธีสมัครใช้งาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/06/18 → 2024/06/26",
          finalTest: "2024/09/17"
        },
        {
          title: "วิธีเข้าสู่ระบบ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/06/26 → 2024/07/01",
          finalTest: "2024/07/19"
        },
        {
          title: "วิธีตรวจสอบข้อมูลใบแจ้งลาออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/07/01 → 2024/07/05",
          finalTest: "2024/07/19"
        },
        {
          title: "หากลืมรหัสผ่าน (วิธีรีเซ็ตรหัสผ่าน)",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/07/05 → 2024/07/09",
          finalTest: "2024/07/19"
        },
        {
          title: "วิธีการลงเวลาเข้าออกงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/07/08 → 2024/07/12",
          finalTest: "2024/07/19"
        },
        {
          title: "วิธีดูปฎิทินการทำงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/07/15 → 2024/07/19",
          finalTest: "2024/07/19"
        },
        {
          title: "วิธีการยื่นเบิกเงินสวัสดิการ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/07/25 → 2024/07/29",
          finalTest: "2024/08/08"
        },
        {
          title: "วิธีการยื่นสลับวันหยุด",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/07/30 → 2024/08/01",
          finalTest: "2024/08/08"
        },
        {
          title: "วิธีการยื่นแก้ไขเวลางาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/01 → 2024/08/02",
          finalTest: "2024/08/08"
        },
        {
          title: "วิธีการดูข้อมูลสรุปการลา",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/05 → 2024/08/06",
          finalTest: "2024/08/08"
        },
        {
          title: "วิธีการตรวจสอบสถานะคำขอ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/08 → 2024/08/09",
          finalTest: "2024/08/16"
        },
        {
          title: "วิธีดูและดาวน์โหลดสลิปเงินเดือน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/12 → 2024/08/12",
          finalTest: "2024/08/16"
        },
        {
          title: "วิธีดูและดาวน์โหลดเอกสาร 50 ทวิ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/13 → 2024/08/13",
          finalTest: "2024/08/16"
        },
        {
          title: "วิธีส่งสลิปเงินเดือนผ่านอีเมล",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/14 → 2024/08/15",
          finalTest: "2024/08/16"
        },
        {
          title: "วิธีส่งเอกสาร50ทวิผ่านอีเมล",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/15 → 2024/08/16",
          finalTest: "2024/08/16"
        },
        {
          title: "วิธีการเปลี่ยนเบอร์โทรศัพท์",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/16 → 2024/08/19",
          finalTest: "2024/08/23"
        },
        {
          title: "วิธีแก้ไขข้อมูลส่วนตัว",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/19 → 2024/08/19",
          finalTest: "2024/08/23"
        },
        {
          title: "วิธีอนุมัติวันลา(เฉพาะหัวหน้า)",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/20 → 2024/08/20",
          finalTest: "2024/08/23"
        },
        {
          title: "วิธีการดูรายงานเข้าออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/21 → 2024/08/21",
          finalTest: "2024/08/23"
        },
        {
          title: "วิธีจัดการเพื่อนของฉัน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/21 → 2024/08/22",
          finalTest: "2024/08/23"
        },
        {
          title: "วิธีแจ้งลาออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/27 → 2024/08/28",
          finalTest: "2024/09/13"
        },
        {
          title: "วิธีตรวจสอบรายงานการทำงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/28 → 2024/08/29",
          finalTest: "2024/09/12"
        },
        {
          title: "วิธีติดตั้งแอพ989Velaa",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/08/29 → 2024/08/30",
          finalTest: "2024/09/13"
        },
        {
          title: "วิธีตั้งค่าเปิด/ปิดตำแหน่ง",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "",
          tester: "Narumon Thongbor",
          devDate: "2024/11/13 → 2024/11/13",
          finalTest: "2024/11/20"
        }
      ]
    },
    {
      id: 2,
      title: "Video Web 989Time",
      description: "สร้างสื่อคู่มือการใช้งาน Web 989Time",
      duration: "ส.ค. 67-ธ.ค. 67",
      status: "เสร็จสมบูรณ์",
      subtasks: [
        {
          title: "วิธีเพิ่มข้อมูลพนักงานใหม่",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ข้อมูลพนักงาน",
          tester: "Narumon Thongbor",
          devDate: "2024/08/26 → 2024/09/10",
          finalTest: "2024/09/18"
        },
        {
          title: "วิธีเพิ่มพนักงานโดย import excel",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ข้อมูลพนักงาน",
          tester: "Narumon Thongbor",
          devDate: "2024/08/26 → 2024/09/16",
          finalTest: "2024/09/28"
        },
        {
          title: "วิธีเพิ่มและแก้ไขสถานะ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ตำแหน่งพนักงาน",
          tester: "Narumon Thongbor",
          devDate: "2024/09/23 → 2024/09/26",
          finalTest: "2024/10/01"
        },
        {
          title: "วิธีบันทึกพนักงานออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "บันทึกพนักงานออก",
          tester: "Narumon Thongbor",
          devDate: "2024/09/28 → 2024/09/30",
          finalTest: "2024/10/16"
        },
        {
          title: "วิธีกำหนดงวดข้อมูล",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "จัดการข้อมูลการจ่าย",
          tester: "Narumon Thongbor",
          devDate: "2024/10/01 → 2024/10/07",
          finalTest: "2024/10/16"
        },
        {
          title: "วิธีบันทึกสวัสดิการรายงวด",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "จัดการข้อมูลการจ่าย",
          tester: "Narumon Thongbor",
          devDate: "2024/10/09 → 2024/10/15",
          finalTest: "2024/10/18"
        },
        {
          title: "วิธีบันทึกรายการหักรายงวด",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "จัดการข้อมูลการจ่าย",
          tester: "Narumon Thongbor",
          devDate: "2024/10/16 → 2024/10/21",
          finalTest: "2024/10/22"
        },
        {
          title: "วิธีโอนข้อมูลพนักงานใหม่",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "เมนูทำงานพิเศษ",
          tester: "Narumon Thongbor",
          devDate: "2024/10/22 → 2024/10/24",
          finalTest: "2024/10/25"
        },
        {
          title: "วิธีโอนข้อมูลพนักงานออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "เมนูทำงานพิเศษ",
          tester: "Narumon Thongbor",
          devDate: "2024/10/24 → 2024/10/25",
          finalTest: "2024/10/25"
        },
        {
          title: "วิธีบันทึกการลางาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ข้อมูลการลางาน",
          tester: "Narumon Thongbor",
          devDate: "2024/10/28 → 2024/10/30",
          finalTest: "2024/11/01"
        },
        {
          title: "วิธีอนุมัติการลางาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ข้อมูลการลางาน",
          tester: "Narumon Thongbor",
          devDate: "2024/10/30 → 2024/10/31",
          finalTest: "2024/11/01"
        },
        {
          title: "วิธีตรวจสอบการลาประจำงวด",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ข้อมูลการลางาน",
          tester: "Narumon Thongbor",
          devDate: "2024/10/31 → 2024/11/01",
          finalTest: "2024/11/01"
        },
        {
          title: "วิธีนำเข้าข้อมูลการทำงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ข้อมูลการลางาน",
          tester: "Narumon Thongbor",
          devDate: "2024/11/04 → 2024/11/08",
          finalTest: "2024/11/08"
        },
        {
          title: "วิธีแก้ไขเวลาเข้า-ออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ข้อมูลการลางาน",
          tester: "Narumon Thongbor",
          devDate: "2024/11/05 → 2024/11/08",
          finalTest: "2024/11/09"
        },
        {
          title: "วิธีส้รางตารางกะการทำงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "กำหนดกะการทำงาน",
          tester: "Narumon Thongbor",
          devDate: "2024/11/08 → 2024/11/09",
          finalTest: "2024/11/09"
        },
        {
          title: "วิธีแก้ไขตารางกะการทำงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "กำหนดกะการทำงาน",
          tester: "Narumon Thongbor",
          devDate: "2024/11/11 → 2024/11/13",
          finalTest: "2024/11/20"
        },
        {
          title: "วิธีกำหนดชื่อกลุ่มกะ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "กำหนดกะการทำงาน",
          tester: "Narumon Thongbor",
          devDate: "2024/11/12 → 2024/11/13",
          finalTest: "2024/11/20"
        },
        {
          title: "วิธีกำหนดกะการทำงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "กำหนดกะการทำงาน",
          tester: "Narumon Thongbor",
          devDate: "2024/11/18 → 2024/11/20",
          finalTest: "2024/11/20"
        },
        {
          title: "วิธีเพิ่มสถานที่ทำงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/11/19 → 2024/11/20",
          finalTest: "2024/11/20"
        },
        {
          title: "วิธีตรวจสอบเวลาเข้า-ออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/11/20 → 2024/11/21",
          finalTest: "2024/11/22"
        },
        {
          title: "วิธีโอนข้อมูลพนักงานใหม่",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/11/25 → 2024/11/27",
          finalTest: "2024/11/29"
        },
        {
          title: "วิธีโอนข้อมูลพนักงานออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/11/26 → 2024/11/27",
          finalTest: "2024/11/29"
        },
        {
          title: "วิธีปรังปรุงผู้อนุมัติ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/11/27 → 2024/11/28",
          finalTest: "2024/11/29"
        },
        {
          title: "วิธีเปลี่ยนหัวหน้างาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/12/02 → 2024/12/06",
          finalTest: "2024/12/06"
        },
        {
          title: "วิธีตรวจสอบรายการขออนุมัติ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/12/03 → 2024/12/06",
          finalTest: "2024/12/06"
        },
        {
          title: "วิธีปิดการยกเลิกรายการคำขอ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/12/06 → 2024/12/06",
          finalTest: "2024/12/06"
        },
        {
          title: "วิธีประมวลผลงวดข้อมูล",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "จัดการข้อมูลการจ่าย",
          tester: "Narumon Thongbor",
          devDate: "2024/12/09 → 2024/12/11",
          finalTest: "2024/12/11"
        },
        {
          title: "วิธีดูรายงานตัดงวดข้อมูล",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "จัดการข้อมูลการจ่าย",
          tester: "Narumon Thongbor",
          devDate: "2024/12/10 → 2024/12/11",
          finalTest: "2024/12/12"
        },
        {
          title: "วิธีตรวจเช็คโควตาลาประจำปี",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "เมนูทำงานพิเศษ",
          tester: "Narumon Thongbor",
          devDate: "2024/12/11 → 2024/12/13",
          finalTest: "2024/12/13"
        },
          {
          title: "วิธีนำเข้าโควตาลาประจำปี",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "เมนูทำงานพิเศษ",
          tester: "Narumon Thongbor",
          devDate: "2024/12/16 → 2024/12/18",
          finalTest: "2024/12/19"
        },
          {
          title: "วิธีกำหนดเงื่อนไขการคิดพักร้อน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "เมนูทำงานพิเศษ",
          tester: "Narumon Thongbor",
          devDate: "2024/12/17 → 2024/12/18",
          finalTest: "2024/12/19"
        },
          {
          title: "วิธียกเลิกพนักงานลาออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "เมนูทำงานพิเศษ",
          tester: "Narumon Thongbor",
          devDate: "2024/12/18 → 2024/12/18",
          finalTest: "2024/12/19"
        },
        {
          title: "วิธีเพิ่มประกาศ 989Velaa app",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Menu 989Velaa",
          tester: "Narumon Thongbor",
          devDate: "2024/12/23 → 2024/12/25",
          finalTest: "2025/01/07"
        },
        {
          title: "วิธีเพิ่มและแก้ไขข้อมูลพื้นฐาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "ค่าเริ่มต้นระบบ",
          tester: "Narumon Thongbor",
          devDate: "2024/12/24 → 2024/12/25",
          finalTest: "2025/01/07"
        }
      ]
    },
    {
      id: 3,
      title: "Video Web 989Velaa",
      description: "สร้างสื่อคู่มือการใช้งาน Web 989Velaa",
      duration: "ม.ค. 68-ตอนนี้",
      status: "กำลังดำเนินการ",
      subtasks: [
        {
          title: "วิธีสร้าง Exit interview",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Tools Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/01/06 → 2025/01/07",
          finalTest: "2025/01/10"
        },
        {
          title: "วิธีตรวจสอบข้อมูลใบแจ้งลาออก",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Employee",
          tester: "Narumon Thongbor",
          devDate: "2025/01/08 → 2025/01/15",
          finalTest: "2025/01/17"
        },
        {
          title: "วิธีเพิ่มข้อมูลพนักงานใหม่",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Employee",
          tester: "Narumon Thongbor",
          devDate: "2025/01/14 → 2025/01/15",
          finalTest: "2025/01/17"
        },
        {
          title: "วิธีเพิ่มพนักงานโดย import excel",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Employee",
          tester: "Narumon Thongbor",
          devDate: "2025/01/15 → 2025/01/17",
          finalTest: "2025/01/17"
        },
        {
          title: "วิธีลบข้อมูลพนักงานที่ผิดพลาด",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Employee",
          tester: "Narumon Thongbor",
          devDate: "2025/01/20 → 2025/01/22",
          finalTest: "2025/01/23"
        },
        {
          title: "วิธีอัปเดตข้อมูลการติดต่อ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Employee",
          tester: "Narumon Thongbor",
          devDate: "2025/01/21 → 2025/01/22",
          finalTest: "2025/01/23"
        },
        {
          title: "วิธีเพิ่มสลิปเงินเดือนพนักงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Payroll Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/01/22 → 2025/01/23",
          finalTest: "2025/01/24"
        },
        {
          title: "วิธีเพิ่มข้อมูลสาขาโดย import",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "System Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/01/28 → 2025/01/29",
          finalTest: "2025/01/29"
        },
        {
          title: "วิธีเพิ่มและแก้ไขข้อมูลสาขา",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "System Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/01/27 → 2025/01/29",
          finalTest: "2025/01/30"
        },
        {
          title: "วิธีตั้งค่าและแก้ไขข้อมูลเงินพิเศษ",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "System Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/01/30 → 2025/01/30",
          finalTest: "2025/01/30"
        },
        {
          title: "วิธีเพิ่มและแก้ไขข้อมูลธนาคาร",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "System Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/01/29 → 2025/01/31",
          finalTest: "2025/01/31"
        },
        {
          title: "วิธีเพิ่มและแก้ไขข้อมูลที่อยู่",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "System Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/03 → 2025/02/05",
          finalTest: "2025/02/13"
        },
        {
          title: "วิธีลบสลิปเงินเดือนพนักงาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Payroll Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/04 → 2025/02/05",
          finalTest: "2025/02/13"
        },
        {
          title: "วิธีสร้างใบแจ้งขอหนังสือรับรอง",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Tools Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/05 → 2025/02/06",
          finalTest: "2025/02/14"
        },
        {
          title: "วิธีเพิ่มและแก้ไข Group View",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Admin Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/10 → 2025/02/13",
          finalTest: "2025/02/14"
        },
        {
          title: "วิธีเพิ่มและแก้ไขระดับสิทธิ์",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Admin Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/13 → 2025/02/14",
          finalTest: "2025/02/14"
        },
        {
          title: "วิธีเพิ่มและแก้ไขสิทธิ์การใช้งาน",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Admin Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/17 → 2025/02/19",
          finalTest: "2025/02/20"
        },
        {
          title: "วิธีเพิ่มประกาศ 989Velaa app",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Tools Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/18 → 2025/02/19",
          finalTest: "2025/02/20"
        },
        {
          title: "วิธีเพิ่มและแก้ไขข้อมูลบริษัท",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Expert Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/19 → 2025/02/20",
          finalTest: "2025/02/21"
        },
        {
          title: "วิธีตั้งค่าสาขากับประเภท Mobile",
          status: "Done",
          assignee: "Montiwa Boonkum",
          module: "Expert Menu",
          tester: "Narumon Thongbor",
          devDate: "2025/02/25 → 2025/02/27",
          finalTest: ""
        }
      ]
    }
  ];

  const openTaskDetails = (task: any) => {
    setSelectedTask(task);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };

  const getTaskIcon = (title: string) => {
    if (title.toLowerCase().includes('video')) {
      return <Video className="w-6 h-6 text-blue-500" />;
    }
    return <BookOpen className="w-6 h-6 text-blue-500" />;
  };

  return (
    <section id="tasks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-center">งานที่ได้รับมอบหมาย</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openTaskDetails(task)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getTaskIcon(task.title)}
                  <h3 className="text-xl font-semibold">{task.title}</h3>
                </div>
                {task.status === "เสร็จสมบูรณ์" ? 
                  <CheckCircle className="text-green-500 w-6 h-6" /> : 
                  <Clock className="text-yellow-500 animate-pulse w-6 h-6" />
                }
              </div>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-1 text-blue-600">
                  <Calendar className="w-4 h-4" />
                  ระยะเวลา: {task.duration}
                </span>
                <span className={task.status === "เสร็จสมบูรณ์" ? "text-green-500" : "text-yellow-500"}>
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Details Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedTask.title}</h3>
                <button 
                  onClick={closeTaskDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-600 mt-2">{selectedTask.description}</p>
              <div className="flex items-center mt-4 text-sm">
                <span className={`px-3 py-1 rounded-full flex items-center ${
                  selectedTask.status === "เสร็จสมบูรณ์" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {selectedTask.status === "เสร็จสมบูรณ์" ? 
                    <CheckCircle size={16} className="mr-1" /> : 
                    <Clock size={16} className="mr-1" />
                  }
                  {selectedTask.status}
                </span>
                <span className="ml-4 flex items-center text-gray-600">
                  <Clock size={16} className="mr-1" />
                  {selectedTask.duration}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-4">งานย่อย</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border">
                  <thead className="bg-gray-50">
                    <tr className="border-b">
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                        ลำดับ
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                        หัวข้อ
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                        Assignee
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                        โมดูล
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                        Tester
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                        dev date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Final Test
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedTask.subtasks.map((subtask, index) => (
                      <tr key={index} className="hover:bg-gray-50 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                          {subtask.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {subtask.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {subtask.assignee}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {subtask.module}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {subtask.tester}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {subtask.devDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {subtask.finalTest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AssignedTasks;