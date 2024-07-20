export default function Home() {
  const posts = [
    { title: '5 Produk Skincare Terbaik untuk Kulit Kering yang Wajib Dicoba', date: 'Jul 19' },
    { title: '', date: 'Jul 19' },
    { title: 'Beyond the Obstacle', date: 'Jul 19' },
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Logo */}
      <div className="flex justify-center items-center mb-8">
        <div className="text-purple-600 mr-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM12 7a5 5 0 110 10 5 5 0 010-10z" />
          </svg>
        </div>
        <div className="text-xl font-semibold text-purple-600">CHIC OF JUNE</div>
        <div className="text-sm text-gray-500 ml-2">Beauty Redefined</div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">Hey, Beauties.</h1>

      {/* Blog List */}
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index} className="flex justify-between items-center">
            <a href="https://chicofjune.wordpress.com/2024/07/19/5-produk-skincare-terbaik-untuk-kulit-kering-yang-wajib-dicoba/" className="text-lg hover:underline">{post.title}</a>
            <span className="text-sm text-gray-500">{post.date}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}