function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-700 text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-12">
          Contact
        </h1>
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold uppercase mb-6">Contactez-moi</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full bg-white/10 border-2 border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/60"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white/10 border-2 border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/60"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  className="w-full bg-white/10 border-2 border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/60 resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-white/20 border-2 border-white/30 rounded-lg text-white font-bold uppercase tracking-wider hover:bg-white/30 transition-all"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-6">
              <h3 className="text-lg font-bold uppercase mb-2">Email</h3>
              <p className="text-white/80">florian@example.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-6">
              <h3 className="text-lg font-bold uppercase mb-2">Behance</h3>
              <p className="text-white/80">behance.net/florian</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
