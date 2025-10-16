export interface LinuxCommand {
  id: string;
  command: string;
  function: string;
  example: string;
  category: string;
}

export const linuxCommands: LinuxCommand[] = [
  // Navigasi & File System
  {
    id: '1',
    command: 'pwd',
    function: 'Menampilkan direktori saat ini',
    example: 'pwd',
    category: 'Navigasi & File System'
  },
  {
    id: '2',
    command: 'ls',
    function: 'Menampilkan daftar file/direktori',
    example: 'ls -l (detail), ls -a (termasuk hidden)',
    category: 'Navigasi & File System'
  },
  {
    id: '3',
    command: 'cd',
    function: 'Pindah direktori',
    example: 'cd /home, cd .., cd ~',
    category: 'Navigasi & File System'
  },
  {
    id: '4',
    command: 'mkdir',
    function: 'Membuat direktori baru',
    example: 'mkdir folderBaru',
    category: 'Navigasi & File System'
  },
  {
    id: '5',
    command: 'rmdir',
    function: 'Menghapus direktori kosong',
    example: 'rmdir folderKosong',
    category: 'Navigasi & File System'
  },
  {
    id: '6',
    command: 'rm -r',
    function: 'Menghapus direktori beserta isinya',
    example: 'rm -r folder',
    category: 'Navigasi & File System'
  },
  {
    id: '7',
    command: 'cp',
    function: 'Menyalin file/direktori',
    example: 'cp file1.txt file2.txt, cp -r dir1 dir2',
    category: 'Navigasi & File System'
  },
  {
    id: '8',
    command: 'mv',
    function: 'Memindah atau mengganti nama file',
    example: 'mv file.txt /home/user/',
    category: 'Navigasi & File System'
  },
  {
    id: '9',
    command: 'touch',
    function: 'Membuat file kosong',
    example: 'touch baru.txt',
    category: 'Navigasi & File System'
  },
  {
    id: '10',
    command: 'cat',
    function: 'Menampilkan isi file',
    example: 'cat file.txt',
    category: 'Navigasi & File System'
  },
  {
    id: '11',
    command: 'less / more',
    function: 'Melihat isi file per halaman',
    example: 'less /etc/passwd',
    category: 'Navigasi & File System'
  },
  {
    id: '12',
    command: 'file',
    function: 'Mengetahui jenis file',
    example: 'file gambar.png',
    category: 'Navigasi & File System'
  },
  // Manajemen Sistem
  {
    id: '13',
    command: 'sudo',
    function: 'Menjalankan perintah sebagai root',
    example: 'sudo apt update',
    category: 'Manajemen Sistem'
  },
  {
    id: '14',
    command: 'apt update',
    function: 'Update daftar paket',
    example: 'sudo apt update',
    category: 'Manajemen Sistem'
  },
  {
    id: '15',
    command: 'apt upgrade',
    function: 'Update semua paket yang terinstal',
    example: 'sudo apt upgrade',
    category: 'Manajemen Sistem'
  },
  {
    id: '16',
    command: 'apt install',
    function: 'Menginstal paket',
    example: 'sudo apt install nmap',
    category: 'Manajemen Sistem'
  },
  {
    id: '17',
    command: 'apt remove',
    function: 'Menghapus paket',
    example: 'sudo apt remove nmap',
    category: 'Manajemen Sistem'
  },
  {
    id: '18',
    command: 'clear',
    function: 'Membersihkan layar terminal',
    example: 'clear',
    category: 'Manajemen Sistem'
  },
  {
    id: '19',
    command: 'history',
    function: 'Menampilkan riwayat perintah',
    example: 'history',
    category: 'Manajemen Sistem'
  },
  {
    id: '20',
    command: 'man',
    function: 'Menampilkan manual (panduan) perintah',
    example: 'man ls',
    category: 'Manajemen Sistem'
  },
  // Pencarian & Filter
  {
    id: '21',
    command: 'find',
    function: 'Mencari file di sistem',
    example: 'find / -name file.txt',
    category: 'Pencarian & Filter'
  },
  {
    id: '22',
    command: 'grep',
    function: 'Mencari teks dalam file',
    example: 'grep "root" /etc/passwd',
    category: 'Pencarian & Filter'
  },
  {
    id: '23',
    command: 'locate',
    function: 'Mencari file berdasarkan database',
    example: 'locate index.html',
    category: 'Pencarian & Filter'
  },
  {
    id: '24',
    command: 'which',
    function: 'Mengetahui lokasi program',
    example: 'which python3',
    category: 'Pencarian & Filter'
  },
  // Informasi Sistem
  {
    id: '25',
    command: 'whoami',
    function: 'Menampilkan user saat ini',
    example: 'whoami',
    category: 'Informasi Sistem'
  },
  {
    id: '26',
    command: 'uname -a',
    function: 'Menampilkan info kernel & sistem',
    example: 'uname -a',
    category: 'Informasi Sistem'
  },
  {
    id: '27',
    command: 'top',
    function: 'Melihat proses berjalan (real-time)',
    example: 'top',
    category: 'Informasi Sistem'
  },
  {
    id: '28',
    command: 'htop',
    function: 'Versi interaktif dari top',
    example: 'htop',
    category: 'Informasi Sistem'
  },
  {
    id: '29',
    command: 'df -h',
    function: 'Melihat penggunaan disk',
    example: 'df -h',
    category: 'Informasi Sistem'
  },
  {
    id: '30',
    command: 'free -h',
    function: 'Melihat penggunaan RAM',
    example: 'free -h',
    category: 'Informasi Sistem'
  },
  {
    id: '31',
    command: 'uptime',
    function: 'Melihat berapa lama sistem hidup',
    example: 'uptime',
    category: 'Informasi Sistem'
  },
  // Jaringan
  {
    id: '32',
    command: 'ifconfig',
    function: 'Melihat konfigurasi jaringan',
    example: 'ifconfig',
    category: 'Jaringan'
  },
  {
    id: '33',
    command: 'ip a',
    function: 'Alternatif ifconfig modern',
    example: 'ip a',
    category: 'Jaringan'
  },
  {
    id: '34',
    command: 'ping',
    function: 'Mengecek koneksi ke host',
    example: 'ping google.com',
    category: 'Jaringan'
  },
  {
    id: '35',
    command: 'netstat',
    function: 'Melihat koneksi jaringan aktif',
    example: 'netstat -tuln',
    category: 'Jaringan'
  },
  {
    id: '36',
    command: 'ss',
    function: 'Versi baru dari netstat',
    example: 'ss -tuln',
    category: 'Jaringan'
  },
  {
    id: '37',
    command: 'curl',
    function: 'Mengambil data dari URL',
    example: 'curl https://example.com',
    category: 'Jaringan'
  },
  {
    id: '38',
    command: 'wget',
    function: 'Mengunduh file dari web',
    example: 'wget https://example.com/file.zip',
    category: 'Jaringan'
  },
  // Perintah Penting untuk Kali Linux (Security/Tools)
  {
    id: '39',
    command: 'nmap',
    function: 'Scan jaringan dan port',
    example: 'nmap -sV target.com',
    category: 'Kali Linux - Security'
  },
  {
    id: '40',
    command: 'whois',
    function: 'Informasi domain/IP',
    example: 'whois example.com',
    category: 'Kali Linux - Security'
  },
  {
    id: '41',
    command: 'ping',
    function: 'Cek konektivitas host',
    example: 'ping -c 4 target.com',
    category: 'Kali Linux - Security'
  },
  {
    id: '42',
    command: 'netdiscover',
    function: 'Menemukan perangkat dalam jaringan lokal',
    example: 'netdiscover -i eth0',
    category: 'Kali Linux - Security'
  },
  {
    id: '43',
    command: 'airmon-ng / aircrack-ng',
    function: 'Untuk analisis dan cracking Wi-Fi',
    example: 'airmon-ng start wlan0',
    category: 'Kali Linux - Security'
  },
  {
    id: '44',
    command: 'hydra',
    function: 'Brute-force login',
    example: 'hydra -l admin -P passwords.txt ssh://target.com',
    category: 'Kali Linux - Security'
  },
  {
    id: '45',
    command: 'msfconsole',
    function: 'Menjalankan Metasploit Framework',
    example: 'msfconsole',
    category: 'Kali Linux - Security'
  },
  {
    id: '46',
    command: 'burpsuite',
    function: 'Membuka Burp Suite untuk pentesting web',
    example: 'burpsuite',
    category: 'Kali Linux - Security'
  }
];

export const categories = [
  'Semua',
  'Navigasi & File System',
  'Manajemen Sistem',
  'Pencarian & Filter',
  'Informasi Sistem',
  'Jaringan',
  'Kali Linux - Security'
];