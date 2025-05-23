export default function Footer() {
  return (
    <footer className="py-12 bg-black/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BioKEA.ai</h3>
            <p className="text-gray-400">
              an AI-driven Bioinformatics OS
            </p>
            <p className="text-gray-400 mt-2">
              Revolutionizing biological research through AI-powered solutions
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Investors</h4>
            <a
              href="/investors"
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-lg text-lg font-semibold transition-all text-white shadow-md"
            >
              Invest in the Future of Bioinformatics
            </a>
             <p className="text-gray-400 text-sm mt-2">Pre-seed Round Open</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-yellow-500/20 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <h4 className="font-bold">Droplet</h4>
              <span className="ml-2 text-sm text-blue-400">Environmental Science For All</span>
            </div>
            <p className="text-gray-400 text-sm">
              BioKEA's Droplet division delivers end-to-end environmental DNA (eDNA) insight, from field surveys to data analysis.
            </p>
            <a href="https://www.dropletedna.com" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block" target="_blank" rel="noopener noreferrer">Visit Droplet &raquo;</a>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-yellow-500/20 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <h4 className="font-bold">Agentis Journal</h4>
              <span className="ml-2 text-sm text-blue-400">Democratizing Scientific Publishing</span>
            </div>
            <p className="text-gray-400 text-sm">
              BioKEA's open-access journal suite reimagines peer review with AI co-reviewers, accelerating scientific communication.
            </p>
            <a href="https://biokea-publishing.pages.dev/" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block" target="_blank" rel="noopener noreferrer">Visit Agentis &raquo;</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} BioKEA.ai. All rights reserved.</p>
          <p className="mt-2 text-sm">an AI-driven Bioinformatics OS</p>
        </div>
      </div>
    </footer>
  )
}