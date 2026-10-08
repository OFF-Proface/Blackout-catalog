BLACKOUT FABRICS — PROFACE STUDIO FLIPBOOK
========================================

พร้อมอัปโหลดขึ้น GitHub Pages (Static website ไม่มี backend หรือการพึ่ง FLIPHTML5)

การติดตั้ง:
1. สร้าง repository บน GitHub เช่น blackout-fabrics
2. อัปโหลดเนื้อหาทั้งหมดใน ZIP ไปที่ root ของ repository (ต้องมี index.html อยู่ระดับบนสุด)
3. ไปที่ Settings > Pages > Build and deployment
4. Source: Deploy from a branch, เลือก main และ / (root), Save
5. เปิด URL https://USERNAME.github.io/blackout-fabrics/

หมายเหตุ:
- หากอัปโหลดไฟล์ ZIP เป็นก้อนโดยไม่แตกไฟล์ เว็บจะไม่ทำงาน ต้องแตกไฟล์ก่อนอัปโหลด
- ทุกหน้าถูกแปลงเป็น WebP เพื่อแสดงผลแบบรวดเร็ว โดยไม่ต้องเรียกเซิร์ฟเวอร์ FlipHTML5
- PDF ต้นฉบับอยู่ที่ assets/Blackout-Fabrics.pdf และดาวน์โหลดจากปุ่มบนเว็บได้
- เปิดหน้าเฉพาะหน้าได้ด้วย #page=5 เช่น
  https://USERNAME.github.io/blackout-fabrics/#page=5
- ทดสอบใน browser ผ่าน GitHub Pages หรือ local webserver; ไม่จำเป็นต้องติดตั้ง dependencies
