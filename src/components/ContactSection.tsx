import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MessageCircle, Sparkles } from "lucide-react";
import mascotContact from "@/assets/mascot-contact.png";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vinjamurimihira/",
    label: "LinkedIn",
    color: "hover:border-secondary/40 hover:shadow-[0_0_25px_hsla(210,80%,70%,0.2)]",
    iconColor: "group-hover:text-secondary",
  },
  {
    icon: Github,
    href: "https://github.com/Vmihira",
    label: "GitHub",
    color: "hover:border-accent/40 hover:shadow-[0_0_25px_hsla(270,60%,70%,0.2)]",
    iconColor: "group-hover:text-accent",
  },
  {
    icon: Mail,
    href: "mailto:vinjamurimihira@gmail.com",
    label: "Email",
    color: "hover:border-primary/40 hover:shadow-[0_0_25px_hsla(330,80%,65%,0.2)]",
    iconColor: "group-hover:text-primary",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl float-animation" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-secondary/8 blur-3xl float-animation-delayed" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block glass-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4"
          >
            LET'S CONNECT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto text-lg"
          >
            I'm always excited to collaborate on innovative projects. Let's build something amazing together.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Mascot + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <motion.img
              src={mascotContact}
              alt="Friendly mascot waving"
              width={200}
              height={200}
              loading="lazy"
              className="mb-6 drop-shadow-[0_0_30px_hsla(270,60%,70%,0.3)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.a
              href="mailto:vinjamurimihira@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="gradient-btn text-sm flex items-center gap-2 mb-4"
            >
              <Send className="w-4 h-4" />
              Send me an email
            </motion.a>
            <motion.a
              href="tel:+918074418799"
              whileHover={{ scale: 1.05 }}
              className="glass-card px-6 py-3 text-sm font-medium text-foreground flex items-center gap-2 transition-all duration-300 hover:border-primary/30"
            >
              <Phone className="w-4 h-4 text-muted-foreground" />
              +91-8074418799
            </motion.a>
          </motion.div>

          {/* Right: Social cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className={`glass-card p-5 flex items-center gap-4 group border border-border/50 ${social.color} transition-all duration-500 cursor-pointer`}
              >
                <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                  <social.icon className={`w-5 h-5 text-muted-foreground ${social.iconColor} transition-colors duration-300`} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{social.label}</p>
                  <p className="text-xs text-muted-foreground">Connect with me</p>
                </div>
                <Sparkles className="w-4 h-4 text-muted-foreground/30 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}

            {/* Quick message card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-5 border border-border/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <p className="font-heading font-semibold text-foreground text-sm">Open to opportunities</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Currently looking for full-time roles in Full Stack & AI development. 
                Feel free to reach out for collaborations, freelance projects, or just a chat!
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center text-xs text-muted-foreground/60"
        >
          © 2026 Vinjamuri Mihira. Crafted with ✨
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
