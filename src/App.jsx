import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { createContext } from "react";
import { useRef } from "react";
import { BackTopButton } from "./components/BackTopButton";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    name: "DINMovie",
    image: "dinmovie-asp-net.png",
    description: {
      en: "Web-based application that allows users to order movie tickets. The system provides CRUD functionality to manage movie data, including film categories, actors, producers and ticket prices. Users can also view film details such as film description, release date, and whether the film is still available or not",
      id: "Aplikasi berbasis web yang memungkinkan pengguna untuk memesan tiket nonton film. Sistem menyediakan fungsionalitas CRUD untuk mengelola data movie, termasuk categori film, aktor,producer dan harga tiket. Pengguna juga dapat melihat detail film seperti deskripsi film, tanggal tayang, dan apakah film masih tersedia atau tidak",
    },
    tools: [
      "C#",
      "CSS",
      "JavaScript",
      "Bootstrap",
      ".NET 7",
      "ASP.NET Core Web App MVC",
      "Visual Studio 2022",
      "SQLServer",
      "SQL Server Management Studio",
    ],
    link: "https://github.com/Sawaluddin-JR/DINMovie",
  },
  {
    name: "SADILgram",
    image: "photo-sharing-application.jpg",
    description: {
      en: "Web-Based application that allows users to share photos with others. The system provides CRUD functionality for managing photo data, including the type of photo, upload time, and privacy settings. Users can also see photo details such as the data that was added to the total views, time since upload, and whether they have shared it or not",
      id: "Aplikasi berbasis web yang memungkinkan pengguna untuk berbagi foto dengan orang lain. Sistem menyediakan fungsionalitas CRUD untuk mengelola data foto, termasuk jenis foto, waktu unggah, dan pengaturan privasi. Pengguna juga dapat melihat detail foto seperti data yang ditambahkan pada total tampilan, waktu sejak unggah, dan apakah sudah dibagikan atau belum.",
    },
    tools: [
      "C#",
      "JavaScript",
      "Bootstrap",
      ".NET 6",
      "ASP.NET Core Web App MVC",
      "Visual Studio 2022",
      "MySQL",
      "SQLyog",
      "XAMPP",
    ],
    link: "https://github.com/Sawaluddin-JR/PhotoSharinggApplication",
  },
  {
    name: "School Management System",
    image: "school-management-system.png",
    description: {
      en: "Windows Form application that allows users to manage school-related tasks. The system provides CRUD functionality for managing student data, including student details, courses, grades, attendance, and school events. Users can also generate reports and manage administrative tasks.",
      id: "Aplikasi Windows Form yang memungkinkan pengguna mengelola tugas-tugas terkait sekolah. Sistem menyediakan fungsionalitas CRUD untuk mengelola data siswa, termasuk detail siswa, mata pelajaran, nilai, kehadiran, dan acara sekolah. Pengguna juga dapat menghasilkan laporan dan mengelola tugas administratif.",
    },
    tools: [
      "C#",
      ".NET 6",
      "Windows Form App (.NET Framework)",
      "Visual Studio 2022",
      "MySQL",
      "SQLyog",
      "XAMPP",
    ],
    link: "https://github.com/Sawaluddin-JR/StudentManagementSystem",
  },
  {
    name: "DIN-SHOP",
    image: "din-shop-react.png",
    description: {
      en: "Web-based application that allows users to shop for various products. The system provides functionality for browsing products, adding them to a shopping cart, and completing the purchase. Users can search for products, view product details, and manage their orders. The system also provides an admin interface for managing products, categories, and orders.",
      id: "Aplikasi berbasis web yang memungkinkan pengguna untuk berbelanja berbagai produk. Sistem menyediakan fungsionalitas untuk menjelajahi produk, menambahkannya ke keranjang belanja, dan menyelesaikan pembelian. Pengguna dapat mencari produk, melihat detail produk, dan mengelola pesanan mereka. Sistem juga menyediakan antarmuka admin untuk mengelola produk, kategori, dan pesanan.",
    },
    tools: [
      "NodeJS",
      "ReactJS",
      "TailwindCSS",
      "Express",
      "MySQL",
      "XAMPP",
      "Visual Studio Code",
    ],
    link: "https://github.com/Sawaluddin-JR/din-shop",
  },
  {
    name: "Laundry Visual",
    image: "laundry-visual.png",
    description: {
      en: "Windows Form application that allows users to manage laundry operations. The application supports CRUD functionality for managing customer data, laundry items, orders, and billing. Users can create new orders, update existing orders, and generate invoices.",
      id: "Aplikasi Windows Form yang memungkinkan pengguna untuk mengelola operasi laundry. Aplikasi ini mendukung fungsionalitas CRUD untuk mengelola data pelanggan, barang laundry, pesanan, dan tagihan. Pengguna dapat membuat pesanan baru, memperbarui pesanan yang ada, dan menghasilkan faktur.",
    },
    tools: [
      "VB NET",
      ".NET 5",
      "Windows Form App (.NET Framework)",
      "Visual Studio 2012",
    ],
    link: "https://github.com/Sawaluddin-JR/Laundry-Visual",
  },
  {
    name: "Library for UNAS PASIM",
    image: "web-perpus.png",
    description: {
      en: "Website that provides library services for UNAS PASIM students. The website allows students to search for books, check availability, and reserve books online. It also provides information about library events and announcements",
      id: "Situs web yang menyediakan layanan perpustakaan bagi mahasiswa UNAS PASIM. Situs web ini memungkinkan mahasiswa untuk mencari buku, mengecek ketersediaan, dan memesan buku secara online. Ini juga menyediakan informasi tentang acara perpustakaan dan pengumuman.",
    },
    tools: [
      "PHP",
      "HTML",
      "CSS",
      "MySQL",
      "XAMPP",
      "phpMyAdmin",
      "Visual Studio Code",
    ],
    link: "https://github.com/Sawaluddin-JR/perpustakaan-website",
  },
  {
    name: "Typing Game",
    image: "typing-game.jpg",
    description: {
      en: "Web-based typing game that helps users improve their typing speed and accuracy. The game provides various levels and challenges, and tracks the user's progress over time.",
      id: "Permainan mengetik berbasis web yang membantu pengguna meningkatkan kecepatan dan akurasi mengetik. Permainan ini menyediakan berbagai tingkat dan tantangan, serta melacak kemajuan pengguna dari waktu ke waktu.",
    },
    tools: ["C#","HTML", "CSS", "JavaScript", "Bootstrap Template","Visual Studio 2019"],
    link: "https://github.com/Sawaluddin-JR/TypingGame",
  },
  {
    name: "DINMOVIE - FRONTEND HTML, CSS, JS",
    image: "dinmovie-website-kuliah.png",
    description: {
      en: "Frontend of a movie information website built with HTML, CSS, and JavaScript. The website provides information about movies, including their titles, genres, release dates, and ratings. Users can search for movies, view details, and add reviews.",
      id: "Bagian frontend dari sebuah situs web informasi film yang dibangun dengan HTML, CSS, dan JavaScript. Situs web ini menyediakan informasi tentang film, termasuk judul, genre, tanggal rilis, dan rating. Pengguna dapat mencari film, melihat detail, dan menambahkan ulasan.",
    },
    tools: ["JavaScript", "HTML", "CSS", "Visual Studio Code"],
    link: "https://github.com/Sawaluddin-JR/project-website-kuliah",
  },
  {
    name: "VelocityRides",
    image: "car-rented-java.png",
    description: {
      en: "Web-based car rental application built with Java. The application allows users to rent cars, view available cars, and manage their bookings. It also includes features for administrators to manage cars, bookings, and user accounts.",
      id: "Aplikasi rental mobil berbasis web yang dibangun dengan Java. Aplikasi ini memungkinkan pengguna untuk menyewa mobil, melihat mobil yang tersedia, dan mengelola pemesanan mereka. Ini juga mencakup fitur untuk administrator untuk mengelola mobil, pemesanan, dan akun pengguna.",
    },
    tools: [
      "Java",
      "SpringBoot",
      "Boostrap",
      "Visual Studio Code",
      "MySQL",
      "XAMPP",
    ],
    link: "https://github.com/Sawaluddin-JR/rentedProject",
  },
  {
    name: "Sawal Sport",
    image: "sawal-sport.png",
    description: {
      en: "Console-based application for managing sports equipment sales. The application allows users to add new products, manage inventory, process sales transactions, and generate reports. It provides a simple and efficient way to track sales and inventory.",
      id: "Aplikasi berbasis konsol untuk mengelola penjualan alat olahraga. Aplikasi ini memungkinkan pengguna untuk menambahkan produk baru, mengelola inventaris, melakukan transaksi penjualan, dan menghasilkan laporan. Ini menyediakan cara yang sederhana dan efisien untuk melacak penjualan dan inventaris.",
    },
    tools: ["C", "Console App", "Visual Studio Code", "Notepad"],
    link: "https://github.com/Sawaluddin-JR/project-syawal-sport-bahas-c",
  },
];

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const LanguageContext = createContext({
  language: null,
  setLanguage: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const strings = {
  id: {
    projects: "Projek",
    contacts: "Kontak",
    introduction: "Halo, saya ",
    tagline: "Pengembang Web",
    slogan: "Menciptakan Pengalaman Digital, Satu Baris Kode pada Satu Waktu!",
  },
  en: {
    projects: "Projects",
    contacts: "Contacts",
    introduction: "Hello, I'm ",
    tagline: "Web Developer",
    slogan: "Crafting Digital Experiences, One Line of Code at a Time!",
  },
};

function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const scroll = useRef(null);

  useEffect(() => {
    console.log(`Theme changed to ${theme === "dark" ? "dark" : "light"}`);
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={
            theme === "dark"
              ? "bg-slate-900 text-gray-100"
              : "bg-slate-600 text-gray-900"
          }
        >
          <BackTopButton scrollRef={scroll} />
          <Header scrollRef={scroll} />
          <Main />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
