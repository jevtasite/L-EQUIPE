// Language Switcher for L'ÉQUIPE website
// Handles translation switching and persistence

class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.init();
  }

  init() {
    // Set initial language
    this.setLanguage(this.currentLang, false);

    // Add click listeners to all language options
    document.querySelectorAll('.language-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.currentTarget.dataset.lang;
        this.setLanguage(lang, true);
      });
    });
  }

  setLanguage(lang, saveToStorage = true) {
    if (!translations[lang]) {
      console.error(`Language ${lang} not found`);
      return;
    }

    this.currentLang = lang;

    // Save to localStorage
    if (saveToStorage) {
      localStorage.setItem('language', lang);
    }

    // Update current language display
    document.querySelectorAll('.current-lang').forEach(el => {
      el.textContent = lang.toUpperCase();
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update meta description
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[lang].meta.description);

    // Translate all elements with data-i18n attribute
    this.translatePage(lang);
  }

  translatePage(lang) {
    const t = translations[lang];

    // Navigation
    this.setText('[data-i18n="nav.about"]', t.nav.about);
    this.setText('[data-i18n="nav.services"]', t.nav.services);
    this.setText('[data-i18n="nav.management"]', t.nav.management);
    this.setText('[data-i18n="nav.players"]', t.nav.players);
    this.setText('[data-i18n="nav.team"]', t.nav.team);
    this.setText('[data-i18n="nav.getInTouch"]', t.nav.getInTouch);

    // Hero Section
    this.setText('[data-i18n="hero.basedIn"]', t.hero.basedIn);
    this.setText('[data-i18n="hero.switzerland"]', t.hero.switzerland);
    this.setHTML('[data-i18n="hero.title"]', `${t.hero.titleLine1}<br />${t.hero.titleLine2}<br />${t.hero.titleLine3}`);
    this.setText('[data-i18n="hero.exploreServices"]', t.hero.exploreServices);
    this.setText('[data-i18n="hero.aboutUs"]', t.hero.aboutUs);
    this.setText('[data-i18n="hero.feature1Title"]', t.hero.feature1Title);
    this.setText('[data-i18n="hero.feature1Text"]', t.hero.feature1Text);
    this.setText('[data-i18n="hero.feature2Title"]', t.hero.feature2Title);
    this.setText('[data-i18n="hero.feature2Text"]', t.hero.feature2Text);
    this.setText('[data-i18n="hero.feature3Title"]', t.hero.feature3Title);
    this.setText('[data-i18n="hero.feature3Text"]', t.hero.feature3Text);

    // About Section
    this.setText('[data-i18n="about.title"]', t.about.title);
    this.setHTML('[data-i18n="about.lead"]', `${t.about.leadPart1} <strong>${t.about.leadPart2}</strong>${t.about.leadPart3}`);
    this.setText('[data-i18n="about.paragraph1"]', t.about.paragraph1);
    this.setText('[data-i18n="about.paragraph2"]', t.about.paragraph2);
    this.setText('[data-i18n="about.readMore"]', t.about.readMore);
    this.setText('[data-i18n="about.stats.yearsLabel"]', t.about.stats.yearsLabel);
    this.setText('[data-i18n="about.stats.playersLabel"]', t.about.stats.playersLabel);
    this.setText('[data-i18n="about.stats.transfersLabel"]', t.about.stats.transfersLabel);
    this.setText('[data-i18n="about.stats.countriesLabel"]', t.about.stats.countriesLabel);

    // Services Section
    this.setText('[data-i18n="services.title"]', t.services.title);
    this.translateService('strategicConsulting', t.services.strategicConsulting);
    this.translateService('careerManagement', t.services.careerManagement);
    this.translateService('scouting', t.services.scouting);
    this.translateService('mentalPreparation', t.services.mentalPreparation);
    this.translateService('supportBeyondFootball', t.services.supportBeyondFootball);
    this.translateService('injuryManagement', t.services.injuryManagement);

    // Management Section
    this.setText('[data-i18n="management.title"]', t.management.title);
    this.setText('[data-i18n="management.tabs.careerPlanning"]', t.management.tabs.careerPlanning);
    this.setText('[data-i18n="management.tabs.playerDevelopment"]', t.management.tabs.playerDevelopment);
    this.setText('[data-i18n="management.tabs.personalBranding"]', t.management.tabs.personalBranding);
    this.setText('[data-i18n="management.tabs.dealMaking"]', t.management.tabs.dealMaking);
    this.translateManagement('careerPlanning', t.management.careerPlanning);
    this.translateManagement('playerDevelopment', t.management.playerDevelopment);
    this.translateManagement('personalBranding', t.management.personalBranding);
    this.translateManagement('dealMaking', t.management.dealMaking);

    // Players Section
    this.setText('[data-i18n="players.title"]', t.players.title);
    this.setText('[data-i18n="players.subtitle"]', t.players.subtitle);
    this.setText('[data-i18n="players.filters.all"]', t.players.filters.all);
    this.setText('[data-i18n="players.filters.forwards"]', t.players.filters.forwards);
    this.setText('[data-i18n="players.filters.midfielders"]', t.players.filters.midfielders);
    this.setText('[data-i18n="players.filters.defenders"]', t.players.filters.defenders);
    this.setText('[data-i18n="players.filters.goalkeepers"]', t.players.filters.goalkeepers);
    this.setText('[data-i18n="players.card.viewStats"]', t.players.card.viewStats);
    this.setText('[data-i18n="players.card.backToProfile"]', t.players.card.backToProfile);
    this.setText('[data-i18n="players.card.seasonLabel"]', t.players.card.seasonLabel);
    this.setText('[data-i18n="players.stats.appearances"]', t.players.stats.appearances);
    this.setText('[data-i18n="players.stats.goals"]', t.players.stats.goals);
    this.setText('[data-i18n="players.stats.assists"]', t.players.stats.assists);
    this.setText('[data-i18n="players.stats.cleanSheets"]', t.players.stats.cleanSheets);
    this.setText('[data-i18n="players.stats.savePercent"]', t.players.stats.savePercent);
    this.setText('[data-i18n="players.stats.tackles"]', t.players.stats.tackles);
    this.setText('[data-i18n="players.stats.interceptions"]', t.players.stats.interceptions);
    this.setText('[data-i18n="players.seeMorePlayers"]', t.players.seeMorePlayers);

    // Team Section
    this.setText('[data-i18n="team.title"]', t.team.title);
    this.setText('[data-i18n="team.subtitle"]', t.team.subtitle);
    this.setText('[data-i18n="team.sectionLeadership"]', t.team.sectionLeadership);
    this.setText('[data-i18n="team.sectionScouting"]', t.team.sectionScouting);
    this.setText('[data-i18n="team.owner1.role"]', t.team.owner1.role);
    this.setText('[data-i18n="team.owner1.bio"]', t.team.owner1.bio);
    this.setText('[data-i18n="team.owner2.role"]', t.team.owner2.role);
    this.setText('[data-i18n="team.owner2.bio"]', t.team.owner2.bio);
    this.setText('[data-i18n="team.scout1.name"]', t.team.scout1.name);
    this.setText('[data-i18n="team.scout1.role"]', t.team.scout1.role);
    this.setText('[data-i18n="team.scout1.bio"]', t.team.scout1.bio);
    this.setText('[data-i18n="team.scout2.name"]', t.team.scout2.name);
    this.setText('[data-i18n="team.scout2.role"]', t.team.scout2.role);
    this.setText('[data-i18n="team.scout2.bio"]', t.team.scout2.bio);
    this.setText('[data-i18n="team.scout3.name"]', t.team.scout3.name);
    this.setText('[data-i18n="team.scout3.role"]', t.team.scout3.role);
    this.setText('[data-i18n="team.scout3.bio"]', t.team.scout3.bio);
    this.setText('[data-i18n="team.scout4.name"]', t.team.scout4.name);
    this.setText('[data-i18n="team.scout4.role"]', t.team.scout4.role);
    this.setText('[data-i18n="team.scout4.bio"]', t.team.scout4.bio);

    // Clients Section
    this.setText('[data-i18n="clients.title"]', t.clients.title);
    this.setText('[data-i18n="clients.subtitle"]', t.clients.subtitle);

    // Contact Section
    this.setText('[data-i18n="contact.title"]', t.contact.title);
    this.setText('[data-i18n="contact.form.nameLabel"]', t.contact.form.nameLabel);
    this.setAttr('[data-i18n="contact.form.namePlaceholder"]', 'placeholder', t.contact.form.namePlaceholder);
    this.setText('[data-i18n="contact.form.emailLabel"]', t.contact.form.emailLabel);
    this.setAttr('[data-i18n="contact.form.emailPlaceholder"]', 'placeholder', t.contact.form.emailPlaceholder);
    this.setText('[data-i18n="contact.form.phoneLabel"]', t.contact.form.phoneLabel);
    this.setAttr('[data-i18n="contact.form.phonePlaceholder"]', 'placeholder', t.contact.form.phonePlaceholder);
    this.setText('[data-i18n="contact.form.messageLabel"]', t.contact.form.messageLabel);
    this.setAttr('[data-i18n="contact.form.messagePlaceholder"]', 'placeholder', t.contact.form.messagePlaceholder);
    this.setText('[data-i18n="contact.form.submitButton"]', t.contact.form.submitButton);
    this.setText('[data-i18n="contact.info.title"]', t.contact.info.title);
    this.setText('[data-i18n="contact.info.addressLabel"]', t.contact.info.addressLabel);
    this.setText('[data-i18n="contact.info.emailLabel"]', t.contact.info.emailLabel);
    this.setText('[data-i18n="contact.info.followUsLabel"]', t.contact.info.followUsLabel);

    // Footer
    this.setText('[data-i18n="footer.description"]', t.footer.description);
    this.setText('[data-i18n="footer.tagline"]', t.footer.tagline);
    this.setText('[data-i18n="footer.quickLinksHeading"]', t.footer.quickLinksHeading);
    this.setText('[data-i18n="footer.quickLinks.about"]', t.footer.quickLinks.about);
    this.setText('[data-i18n="footer.quickLinks.services"]', t.footer.quickLinks.services);
    this.setText('[data-i18n="footer.quickLinks.players"]', t.footer.quickLinks.players);
    this.setText('[data-i18n="footer.quickLinks.contact"]', t.footer.quickLinks.contact);
    this.setText('[data-i18n="footer.contactHeading"]', t.footer.contactHeading);
    this.setText('[data-i18n="footer.followUsHeading"]', t.footer.followUsHeading);
    this.setText('[data-i18n="footer.copyright"]', t.footer.copyright);
    this.setText('[data-i18n="footer.privacyPolicy"]', t.footer.privacyPolicy);
    this.setText('[data-i18n="footer.termsOfService"]', t.footer.termsOfService);

    // Update "Read More" button text based on current state
    const readMoreBtn = document.getElementById('readMoreAbout');
    if (readMoreBtn) {
      const isExpanded = readMoreBtn.classList.contains('active');
      const btnText = readMoreBtn.querySelector('.btn-text');
      if (btnText) {
        btnText.textContent = isExpanded ? t.about.readLess : t.about.readMore;
      }
    }
  }

  translateService(serviceName, serviceData) {
    this.setText(`[data-i18n="services.${serviceName}.title"]`, serviceData.title);
    this.setText(`[data-i18n="services.${serviceName}.description"]`, serviceData.description);
    this.setText(`[data-i18n="services.${serviceName}.item1"]`, serviceData.item1);
    this.setText(`[data-i18n="services.${serviceName}.item2"]`, serviceData.item2);
    this.setText(`[data-i18n="services.${serviceName}.item3"]`, serviceData.item3);
    this.setText(`[data-i18n="services.${serviceName}.item4"]`, serviceData.item4);
  }

  translateManagement(tabName, tabData) {
    this.setText(`[data-i18n="management.${tabName}.heading"]`, tabData.heading);
    this.setText(`[data-i18n="management.${tabName}.strongText"]`, tabData.strongText);
    this.setText(`[data-i18n="management.${tabName}.description"]`, tabData.description);
    this.setText(`[data-i18n="management.${tabName}.item1"]`, tabData.item1);
    this.setText(`[data-i18n="management.${tabName}.item2"]`, tabData.item2);
    this.setText(`[data-i18n="management.${tabName}.item3"]`, tabData.item3);
    this.setText(`[data-i18n="management.${tabName}.item4"]`, tabData.item4);
    this.setText(`[data-i18n="management.${tabName}.item5"]`, tabData.item5);
    if (tabData.item6) {
      this.setText(`[data-i18n="management.${tabName}.item6"]`, tabData.item6);
    }
  }

  setText(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.textContent = text;
    });
  }

  setHTML(selector, html) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.innerHTML = html;
    });
  }

  setAttr(selector, attr, value) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.setAttribute(attr, value);
    });
  }
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.languageSwitcher = new LanguageSwitcher();
});
