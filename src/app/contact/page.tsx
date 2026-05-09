'use client'
import * as z from "zod";

export default function Contact() {


  return (
    <div className="pt-60 flex min-h-screen flex-col items-center bg-black text-white px-4 py-24">
       <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-6">Let's Talk</h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Email</h3>
                <p className="text-xl font-medium">hello@moonomena.com</p>
              </div>
              <div className="p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Office</h3>
                <p className="text-xl font-medium">123 Space Station, Orbit 9</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl">
             <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                >
                  Send Message
                </button>
             </form>
          </div>

       </div>
    </div>
  )
}