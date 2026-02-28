# Plaimanas - Frontend Practical Test

## ภาพรวม

โครงการนี้คือการพัฒนาแลนดิ้งเพจแฟชั่นพรีเมียมสำหรับแบรนด์ **Plaimanas** โดยมุ่งให้ได้งานระดับ production ทั้งด้านภาพลักษณ์ ความลื่นไหลของอนิเมชัน การตอบสนองบนหลายขนาดหน้าจอ และการจัดระเบียบโค้ดที่อ่านง่าย

## ไฮไลต์ฟีเจอร์

- วิดีโอเต็มจอแบบติดตามการเลื่อน (sticky hero) พร้อมโปสเตอร์สำรอง
- โลโก้ปรับขนาดอัตโนมัติระหว่างพื้นที่ Hero และแถบเมนู
- แบนเนอร์เลื่อนอัตโนมัติ (marquee) สำหรับ New Arrival และ Best Selling
- เอฟเฟ็กต์ Hover Reveal: รูปคอลเล็กชันสลับเป็นวิดีโอเมื่อชี้เมาส์
- FAQ แบบแท็บ + อะคอร์เดียนพร้อมแอนิเมชันเปิดปิด
- ฟอร์มติดต่อเชิงโต้ตอบ (radio, floating label, custom select)
- เมนูนำทางรองรับมือถือพร้อม language selector และ overlay มืด
- โหลดวิดีโออย่างชาญฉลาดและหยุดเล่นเมื่ออยู่นอกจอเพื่อลดการใช้แบนด์วิดท์

## เทคโนโลยีและสถาปัตยกรรม

- **HTML5**: โครงสร้างเชิงความหมาย เน้น SEO และการเข้าถึง
- **CSS3 (Vanilla)**: Design tokens, Flex/Grid, keyframe animations, media queries
- **JavaScript ES6+**: DOM interaction, IntersectionObserver สำหรับอนิเมชัน/วิดีโอ, การจัดการสถานะเมนูและ FAQ
- ไม่พึ่งพาเฟรมเวิร์กหรือบันเดลเลอร์ เพื่อให้เปิดใช้ได้ทันที

## โครงสร้างไฟล์และทรัพยากร (รวม assets ที่เกี่ยวข้อง)

```
/
|-- index.html                # หน้าแลนดิ้งหลัก
|-- .prettierrc               # กำหนดรูปแบบโค้ด (ใช้ Prettier)
|-- README.md
|-- styles/
|   |-- base.css               # รีเซ็ตและเบสสไตล์
|   |-- main.css               # จัดการเลย์เอาต์หลักและคอมโพเนนต์
|   |-- navbar.css             # สไตล์แถบเมนูและเมนูมือถือ
|   |-- theme.css              # Design tokens: สี, ฟอนต์, spacing
|   |-- foundation/            # ไฟล์ฐาน เช่น variables เพิ่มเติม
|   |-- layouts/               # เลย์เอาต์ระดับเซกชัน
|   |-- components/            # คอมโพเนนต์ย่อย
|   `-- utilities/             # ยูทิลิตี้คลาส
|-- script/
|   |-- script.js              # จุดเริ่มต้นรวมสคริปต์
|   |-- navigation.js          # ควบคุม navbar, language, burger menu
|   |-- hero-animation.js      # จัดการอนิเมชันโลโก้/เฮโร่
|   |-- scroll-observer.js     # IntersectionObserver สำหรับส่วนที่เลื่อนถึง
|   |-- ui-controller.js       # ประสานสถานะ UI ทั่วไป
|   |-- faq.js                 # ลอจิกแท็บและอะคอร์เดียน FAQ
|   `-- video-optimizer.js     # โหลด/หยุดวิดีโอตามการมองเห็น
|-- images/                   # ทรัพยากรภาพทั้งหมด
|   |-- logo_hero.svg, logo_small.svg
|   |-- hero-poster.png, bestseller-poster.png
|   |-- collection-01-poster.png, collection-poster.png
|   |-- collections_01.svg, collections_02.svg, collections_03.svg
|   |-- new_collection.svg, person_collections.svg
|   |-- arrow_left_pixel.svg, arrow_right_pixel.svg
|   |-- dropdown.svg, menu_mobile.svg, close_icon_mobile.svg
|   `-- meteor-icons_bag-shopping.svg
|-- videos/                   # ทรัพยากรวิดีโอสำหรับพื้นหลังและ hover
|   |-- hero-bg.mp4
|   |-- bestseller-bg.mp4
|   `-- collection.mp4
`-- assets/                   # โฟลเดอร์สำรองสำหรับไฟล์เสริม (ปัจจุบันว่าง)
```

## วิธีใช้งาน

1. เปิดไฟล์ `index.html` ตรง ๆ ในเบราว์เซอร์ หรือใช้ส่วนขยาย Live Server ของ VS Code เพื่อให้รีเฟรชอัตโนมัติ
2. ต้องการดูผ่านเซิร์ฟเวอร์แบบเบา ๆ สามารถรัน `npx http-server .` หรือ `npx serve .` (ต้องมี Node.js)

## แนวทางพัฒนาเพิ่มเติม

- รักษารูปแบบโค้ดด้วย `npx prettier --write index.html styles script`
- ถ้าปรับวิดีโอใหม่ แนะนำให้สร้างไฟล์โปสเตอร์ (`*.png`) คู่กันเพื่อให้โหลดเร็วบนเครือข่ายช้า
- ตรวจสอบเอฟเฟ็กต์ hover และวิดีโอด้วยอุปกรณ์สัมผัส เพราะปฏิสัมพันธ์จะแตกต่างจากเดสก์ท็อป

## ผู้จัดทำ

**Chuthamat (Ant)** - Frontend Developer  
GitHub: [@ChuthamatDev](https://github.com/ChuthamatDev)
