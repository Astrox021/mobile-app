/**
 * CreatorFlow - Mobile Social Studio Application Engine
 */

// Sample Media Library Presets
const SAMPLE_MEDIA = [
  {
    id: 'sample-1',
    name: 'IMG_9281.RAW',
    type: 'image',
    title: 'Minimalist Photo Studio Setup',
    topic: 'Product design sprint & analytics dashboard launch',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmwv3MRMgtMjO2NwV7wI7qq0pj0iIys_eaYuGXO01GpBbOaE2AsfDnnCBAeW75KJKGats7NlXi_A1gQfkKjbFiaKXqzSqkoj8Qy1TroQfqu4lELAQuQboKlmCHqgICoVYXMH8uHJsYSpzne3fmfAszQoe7l14_-VG0oqrajlzVLtS-E8NA4LDyxz0tlCs9nus58Uh8LXiGG2h3jvC5uaDX37RByaOzn7HpChFod6POMoX5OoISZQA',
    enhancedUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA-BVZD7hS4duhQpLvDHEytrdW_adMw1StEQsKpEshAwkjv5Xs6oSyrNZTtiAoqKRo9e7xDnoreA4lL_1EqGnuBoqhCZcJv1IpgctxlBhFIVMrFBv3InBRvxeI2MAoWYhcTsaYjJpNCJDUGIef_tTjqrDRPIh7-j3Ak8MHAlG5LOlukatg7msuNH4oqn4_R7s_4ZN_MOx2AR49NQATKe0cCqcOTPDvNQXoK_NsTwUmh4LrZ4UOAJ8',
    size: '24.8 MB',
    badge: 'RAW Photo'
  },
  {
    id: 'sample-2',
    name: 'City_Broll_v2.mp4',
    type: 'video',
    title: 'Urban Sunset Cinematic B-Roll',
    topic: 'Golden hour street videography & cinematic grading workflow',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvmC1QFOjTqYv9YXMfk-BL0vWidt6K1FnX2yR0HrPUC1gDKPZy-awxHUDZj7ZJ7YL0OjCDzFJjgnuhMRlZxjframrjKtgyIWaAtY6NV43scfGDD5GyePITPobW4WsIhZW2gK0BXXvsjzu1OkZZH6Y5vrOKUKR5qqnqqMI1Y-xz1qdxyhgtzPuFH09zRCDk5ISqg6UddwkcJyHKXo2hNDfgqEmWPTF8osmHgkVZ1zbpIVQtJoCRH2c',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    size: '142.3 MB',
    badge: '4K Reel'
  },
  {
    id: 'sample-3',
    name: 'Abstract_01.jpg',
    type: 'image',
    title: 'Fluid Deep Indigo Macro Artwork',
    topic: 'Fluid organic art generation & glassmorphic textures',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7J6wv8DPS4S1D92Ji3r8lTxwtUXOikQUu9I1jGv_VeJOwS2yvSo-P-LmViSnri6-URv2B4Oqs3fsNhxoVXz06Z_K5p1HhBMBMqWxdt1ZA1ulnwD2H7hsnzz-AQFg_FVJNxu0JnIMYN3t-ysDIavvnsnFUG4llhxChaBUo5qLzi1MddSbLWDiXCPqiV7wZZBtb_QmgLPG-kgy2rC_T2_xfSBFu6z7HUIwfBZWgHP-A53-4UnQrV6E',
    enhancedUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7J6wv8DPS4S1D92Ji3r8lTxwtUXOikQUu9I1jGv_VeJOwS2yvSo-P-LmViSnri6-URv2B4Oqs3fsNhxoVXz06Z_K5p1HhBMBMqWxdt1ZA1ulnwD2H7hsnzz-AQFg_FVJNxu0JnIMYN3t-ysDIavvnsnFUG4llhxChaBUo5qLzi1MddSbLWDiXCPqiV7wZZBtb_QmgLPG-kgy2rC_T2_xfSBFu6z7HUIwfBZWgHP-A53-4UnQrV6E',
    size: '18.4 MB',
    badge: 'Macro Art'
  },
  {
    id: 'sample-4',
    name: 'Voiceover_Final.wav',
    type: 'audio',
    title: 'Podcast Studio Audio Master',
    topic: 'Creative entrepreneurship podcast episode preview',
    url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    size: '42.1 MB',
    badge: 'Audio File'
  }
];

// App Global State
const state = {
  currentScreen: 'screen-upload',
  screenHistory: ['screen-upload'],
  currentMedia: { ...SAMPLE_MEDIA[0] },
  selectedPlatforms: {
    linkedin: true,
    instagram: true,
    x: true,
    reddit: true
  },
  activeResultPlatform: 'linkedin',
  currentTopic: 'Product design sprint & analytics dashboard launch',
  posts: {},
  editorOriginalText: '',
  editorCurrentText: '',
  editorPlatform: 'linkedin',
  editorTone: 'Professional',
  upscaleFactor: '2x',
  upscaleSliderPos: 50,
  upscaleFilters: {
    detail: true,
    denoise: false,
    faceRefine: true,
    colorFix: false,
    lowLight: false,
    hdr: false,
    texture: false,
    sharpness: false
  },
  drafts: [
    {
      id: 'draft-1',
      platform: 'linkedin',
      title: 'Analytics Dashboard Case Study',
      mediaName: 'IMG_9281.RAW',
      mediaUrl: SAMPLE_MEDIA[0].url,
      caption: 'Just wrapped up an incredible sprint designing the new analytics dashboard! 🚀 Whitespace & subtle depth were keys to success.',
      date: 'Aug 14, 2026'
    },
    {
      id: 'draft-2',
      platform: 'instagram',
      title: 'Golden Hour Reels Edit',
      mediaName: 'City_Broll_v2.mp4',
      mediaUrl: SAMPLE_MEDIA[1].url,
      caption: 'Chasing light through the skyline 🌆 Quick color grade workflow breakdown in the comments!',
      date: 'Aug 13, 2026'
    }
  ],
  isMobileFramed: true,
  likes: {
    linkedin: 342,
    instagram: 1429,
    x: 845,
    reddit: 248
  },
  userLiked: {
    linkedin: false,
    instagram: false,
    x: false,
    reddit: false
  }
};

// AI Copy Generator Engine
function generatePlatformPosts(media, topic) {
  const isVideo = media.type === 'video';
  const subject = topic || media.title || 'Creative project showcase';
  
  return {
    linkedin: {
      platform: 'linkedin',
      name: 'Sarah Jenkins',
      handle: 'Product Designer @ CreatorFlow',
      time: '2h • 🌐',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      title: `Designing for Impact: ${subject}`,
      caption: isVideo 
        ? `Just finished rendering our latest reel breakdown on ${subject}! 🎬\n\nVideo pacing and crisp visual storytelling make all the difference in creator engagement. In this quick sequence, we focused on high-retention cuts and seamless sound design.\n\nKey takeaways from our production sprint:\n1️⃣ Hook the viewer within the first 1.5 seconds.\n2️⃣ Color grading should support the mood, not distract.\n3️⃣ Pacing > perfection.\n\nWhat video editing tools are currently dominating your creator workflow? Would love to exchange notes below! 👇\n\n#ContentCreation #VideoProduction #CreatorFlow #VisualStorytelling #SocialMediaStrategy`
        : `Just wrapped up an incredible sprint around ${subject}! 🚀\n\nOne of the biggest challenges was taking complex data and making it feel effortless and approachable. We leaned heavily into minimalist principles and a glassmorphic aesthetic to keep the interface light and breathable.\n\nKey takeaways from this build:\n1️⃣ Whitespace is your best friend when dealing with dense data.\n2️⃣ Subtle depth > heavy flat shadows.\n3️⃣ Always prioritize user intent over decorative flair.\n\nWhat are your favorite ways to simplify complex creator workflows? Drop your thoughts below! 👇\n\n#UXDesign #ProductDesign #DataVisualization #CreatorFlow #DesignSystems`,
      stats: { likes: 342, comments: 48, shares: 19 }
    },
    instagram: {
      platform: 'instagram',
      name: 'sarah.jenkins_',
      handle: 'sarah.jenkins_',
      audioTrack: 'Original audio • CreatorFlow Sound',
      time: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      caption: isVideo
        ? `City b-roll hits different when the golden hour light hits just right ✨🏙️\n\nShot on 4K 60fps • Graded with CreatorFlow Studio presets. Which frame is your favorite: 1 or 2?\n.\n.\n.\n#cinematography #reelsinstagram #videocreator #creatorflow #filmmaking #goldenhourvibes #contentcreator`
        : `Simplicity is the ultimate sophistication. 🔮✨\n\nSneak peek into our new Studio dashboard workspace. Designed with glassmorphic depth, ambient indigo accents, and seamless cross-platform sharing.\n\nDrop a 💜 if you love clean aesthetic UI!\n.\n.\n.\n#uiux #designsystem #creatorflow #appdesign #minimalistdesign #techcreators #creativespace`,
      stats: { likes: 1429, comments: 84 }
    },
    x: {
      platform: 'x',
      name: 'Sarah Jenkins',
      handle: '@sarah_design',
      badge: true,
      time: '2h',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      caption: isVideo
        ? `Quick 30s cut from our golden hour shoot 🌆\n\n3 rules we used for high-retention reels:\n1. Motion in frame 0\n2. Match-cut on beat\n3. 2.5s max clip duration\n\nFull color LUTs dropping soon. What do you think? 🧵👇`
        : `Most creator tools look like spreadsheets from 2012.\n\nWe spent the last 2 weeks rethinking our Studio UI around 3 rules:\n• Zero visual clutter\n• Glassmorphic depth\n• 1-click cross-platform formatting\n\nHere’s the result 👇 Let me know your thoughts!`,
      stats: { replies: 34, reposts: 112, likes: 845, bookmarks: 92, views: '14.2K' }
    },
    reddit: {
      platform: 'reddit',
      subreddit: 'r/design_critiques',
      author: 'u/sarah_creates',
      time: '2h ago',
      title: `[Feedback Wanted] We just finished building this new ${isVideo ? 'reel workflow' : 'studio creator interface'} — honest UI/UX feedback welcome!`,
      caption: isVideo
        ? `Hey Reddit community!\n\nWe've been testing a new automated reel optimizer tailored for multi-platform distribution. The goal is keeping visual fidelity crisp while matching each platform's aspect ratio (9:16 vs 1:1 vs 4:5).\n\nWould love feedback on:\n- Is the transition pacing smooth?\n- How does the color balance look on mobile screens?\n\nAppreciate any constructive thoughts!`
        : `Hey everyone! 👋\n\nWe've been working on a mobile-first social studio called CreatorFlow. The core focus is giving creators native post previews (LinkedIn, Insta, X, Reddit) without needing 4 different apps open.\n\nWe went for soft ambient shadows and glassmorphic depth rather than flat dark mode.\n\nQuestion for the community:\n1. Is the information hierarchy clear?\n2. What missing feature would make this a daily tool in your workflow?\n\nThanks in advance for tearing it apart!`,
      stats: { upvotes: 248, comments: 56 }
    }
  };
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Generate initial posts
  state.posts = generatePlatformPosts(state.currentMedia, state.currentTopic);
  
  initNavigation();
  initUploadScreen();
  initPlatformScreen();
  initResultsScreen();
  initCaptionEditor();
  initUpscaleScreen();
  initDraftsAndProfile();
  initFrameSwitcher();
  
  // Set initial screen
  navigateTo('screen-upload', false);
});

// Toast Notification Utility
function showToast(message, icon = 'check_circle') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-primary text-xl fill-icon" data-icon="${icon}">${icon}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-12px) scale(0.95)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// Navigation Engine
function navigateTo(screenId, pushHistory = true) {
  const screens = document.querySelectorAll('.screen-view');
  screens.forEach(s => s.classList.remove('active'));
  
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    state.currentScreen = screenId;
    if (pushHistory) {
      state.screenHistory.push(screenId);
    }
    
    // Update bottom nav active state
    updateBottomNavState(screenId);
    
    // Scroll mobile frame to top
    const frame = document.querySelector('.mobile-frame-container');
    if (frame) frame.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function navigateBack() {
  if (state.screenHistory.length > 1) {
    state.screenHistory.pop(); // Remove current
    const prevScreen = state.screenHistory[state.screenHistory.length - 1];
    navigateTo(prevScreen, false);
  } else {
    navigateTo('screen-upload', false);
  }
}

function updateBottomNavState(screenId) {
  const navButtons = document.querySelectorAll('[data-nav-target]');
  navButtons.forEach(btn => {
    const target = btn.getAttribute('data-nav-target');
    const isMatching = 
      (target === 'screen-upload' && (screenId === 'screen-upload' || screenId === 'screen-platforms')) ||
      (target === 'screen-results' && screenId === 'screen-results') ||
      (target === 'screen-drafts' && (screenId === 'screen-drafts' || screenId === 'screen-caption-editor')) ||
      (target === 'screen-profile' && screenId === 'screen-profile');
    
    if (isMatching) {
      btn.classList.add('text-primary');
      btn.classList.remove('text-on-surface-variant');
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon) icon.classList.add('fill-icon');
    } else {
      btn.classList.remove('text-primary');
      btn.classList.add('text-on-surface-variant');
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon) icon.classList.remove('fill-icon');
    }
  });
}

function initNavigation() {
  // Back buttons
  document.querySelectorAll('[data-action="back"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateBack();
    });
  });
  
  // Bottom navigation links
  document.querySelectorAll('[data-nav-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-nav-target');
      if (target) navigateTo(target);
    });
  });
}

// ----------------------------------------------------
// Screen 1: Upload Media Screen Logic
// ----------------------------------------------------
function initUploadScreen() {
  const dropzone = document.getElementById('upload-dropzone');
  const fileInputPhoto = document.getElementById('file-input-photo');
  const fileInputReel = document.getElementById('file-input-reel');
  const btnUploadPhoto = document.getElementById('btn-upload-photo');
  const btnUploadReel = document.getElementById('btn-upload-reel');
  const selectedMediaCard = document.getElementById('selected-media-preview-card');
  const btnProceedToPlatforms = document.getElementById('btn-proceed-to-platforms');
  
  // Trigger file pickers
  if (btnUploadPhoto && fileInputPhoto) {
    btnUploadPhoto.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInputPhoto.click();
    });
  }
  
  if (btnUploadReel && fileInputReel) {
    btnUploadReel.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInputReel.click();
    });
  }
  
  // Handle file inputs
  if (fileInputPhoto) {
    fileInputPhoto.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleUploadedFile(file, 'image');
    });
  }
  
  if (fileInputReel) {
    fileInputReel.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleUploadedFile(file, 'video');
    });
  }
  
  // Drag & drop handlers
  if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('dropzone-active');
      });
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('dropzone-active');
      });
    });
    
    dropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        const file = files[0];
        const isVideo = file.type.startsWith('video/');
        handleUploadedFile(file, isVideo ? 'video' : 'image');
      }
    });
    
    dropzone.addEventListener('click', () => {
      if (fileInputPhoto) fileInputPhoto.click();
    });
  }
  
  // Recent items click listeners
  document.querySelectorAll('.recent-preset-item').forEach(item => {
    item.addEventListener('click', () => {
      const sampleId = item.getAttribute('data-sample-id');
      const sample = SAMPLE_MEDIA.find(s => s.id === sampleId);
      if (sample) {
        setMedia(sample);
        showToast(`Loaded ${sample.name}`, 'cloud_done');
        // Smooth scroll to preview or proceed
        navigateTo('screen-platforms');
      }
    });
  });
  
  if (btnProceedToPlatforms) {
    btnProceedToPlatforms.addEventListener('click', () => {
      navigateTo('screen-platforms');
    });
  }
}

function handleUploadedFile(file, type) {
  const url = URL.createObjectURL(file);
  const sizeMB = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
  
  const customMedia = {
    id: 'user-uploaded-' + Date.now(),
    name: file.name,
    type: type,
    title: file.name.replace(/\.[^/.]+$/, ""),
    topic: 'Custom upload: ' + file.name,
    url: url,
    videoSrc: type === 'video' ? url : null,
    enhancedUrl: url,
    size: sizeMB,
    badge: type === 'video' ? 'Reel Video' : 'HD Image'
  };
  
  setMedia(customMedia);
  showToast(`Uploaded ${file.name} successfully!`, 'check_circle');
  
  // Automatically progress to platform selection
  setTimeout(() => {
    navigateTo('screen-platforms');
  }, 400);
}

function setMedia(media) {
  state.currentMedia = media;
  state.currentTopic = media.topic || media.title || 'Creator Studio Project';
  state.posts = generatePlatformPosts(media, state.currentTopic);
  
  // Update Upload Screen Preview Card
  const card = document.getElementById('selected-media-preview-card');
  const imgThumb = document.getElementById('selected-media-thumb');
  const videoBadge = document.getElementById('selected-media-video-badge');
  const nameEl = document.getElementById('selected-media-name');
  const sizeEl = document.getElementById('selected-media-size');
  
  if (card && imgThumb && nameEl && sizeEl) {
    card.classList.remove('hidden');
    imgThumb.style.backgroundImage = `url('${media.url}')`;
    nameEl.textContent = media.name;
    sizeEl.textContent = `${media.badge} • ${media.size}`;
    if (videoBadge) {
      if (media.type === 'video') {
        videoBadge.classList.remove('hidden');
      } else {
        videoBadge.classList.add('hidden');
      }
    }
  }
  
  // Update Platform selection summary pill
  const platformMediaSummary = document.getElementById('platform-media-summary-pill');
  if (platformMediaSummary) {
    platformMediaSummary.innerHTML = `
      <div class="w-8 h-8 rounded-lg bg-cover bg-center shrink-0 border border-white/30" style="background-image: url('${media.url}')"></div>
      <div class="truncate text-xs font-semibold text-on-surface">${media.name} (${media.badge})</div>
    `;
  }
  
  // Update prompt input placeholder
  const topicInput = document.getElementById('platform-topic-input');
  if (topicInput) {
    topicInput.value = state.currentTopic;
  }
}

// ----------------------------------------------------
// Screen 2: Select Platforms Screen Logic
// ----------------------------------------------------
function initPlatformScreen() {
  const platformToggles = document.querySelectorAll('.platform-toggle-input');
  const btnContinue = document.getElementById('btn-platforms-continue');
  const selectAllBtn = document.getElementById('btn-select-all-platforms');
  const topicInput = document.getElementById('platform-topic-input');
  
  platformToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const platform = e.target.getAttribute('data-platform');
      state.selectedPlatforms[platform] = e.target.checked;
      
      const card = e.target.closest('.platform-select-card');
      if (card) {
        if (e.target.checked) {
          card.classList.add('border-primary', 'shadow-md');
          card.classList.remove('border-transparent');
        } else {
          card.classList.remove('border-primary', 'shadow-md');
          card.classList.add('border-transparent');
        }
      }
      updateContinueButtonCount();
    });
  });
  
  if (selectAllBtn) {
    selectAllBtn.addEventListener('click', () => {
      const anyUnchecked = Object.values(state.selectedPlatforms).some(v => !v);
      const targetState = anyUnchecked;
      
      platformToggles.forEach(toggle => {
        toggle.checked = targetState;
        const platform = toggle.getAttribute('data-platform');
        state.selectedPlatforms[platform] = targetState;
        const card = toggle.closest('.platform-select-card');
        if (card) {
          if (targetState) {
            card.classList.add('border-primary', 'shadow-md');
            card.classList.remove('border-transparent');
          } else {
            card.classList.remove('border-primary', 'shadow-md');
            card.classList.add('border-transparent');
          }
        }
      });
      
      selectAllBtn.textContent = targetState ? 'Deselect All' : 'Select All';
      updateContinueButtonCount();
    });
  }
  
  if (btnContinue) {
    btnContinue.addEventListener('click', () => {
      const selectedCount = Object.values(state.selectedPlatforms).filter(Boolean).length;
      if (selectedCount === 0) {
        showToast('Please select at least one platform', 'warning');
        return;
      }
      
      if (topicInput && topicInput.value.trim()) {
        state.currentTopic = topicInput.value.trim();
        state.posts = generatePlatformPosts(state.currentMedia, state.currentTopic);
      }
      
      // Determine first active platform
      for (const [p, isSelected] of Object.entries(state.selectedPlatforms)) {
        if (isSelected) {
          state.activeResultPlatform = p;
          break;
        }
      }
      
      // Render Results Dashboard
      renderResultsDashboard();
      navigateTo('screen-results');
      showToast('Generated 4 platform-ready posts!', 'auto_awesome');
    });
  }
  
  updateContinueButtonCount();
}

function updateContinueButtonCount() {
  const btnContinue = document.getElementById('btn-platforms-continue');
  const count = Object.values(state.selectedPlatforms).filter(Boolean).length;
  if (btnContinue) {
    btnContinue.innerHTML = `
      <span class="material-symbols-outlined text-lg fill-icon" data-icon="auto_awesome">auto_awesome</span>
      <span>Generate ${count} Platform Post${count === 1 ? '' : 's'}</span>
    `;
    btnContinue.disabled = count === 0;
    btnContinue.style.opacity = count === 0 ? '0.5' : '1';
  }
}

// ----------------------------------------------------
// Screen 3: Results Dashboard Logic
// ----------------------------------------------------
function initResultsScreen() {
  // Platform tab clicks
  document.querySelectorAll('.platform-result-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const platform = tab.getAttribute('data-platform-tab');
      switchResultPlatform(platform);
    });
  });
  
  // Action buttons
  const btnCopy = document.getElementById('btn-copy-caption');
  const btnEdit = document.getElementById('btn-edit-post');
  const btnUpscale = document.getElementById('btn-open-upscale');
  const btnShare = document.getElementById('btn-share-now');
  
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const post = state.posts[state.activeResultPlatform];
      if (post) {
        const textToCopy = (post.title ? post.title + '\n\n' : '') + post.caption;
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${post.platform.toUpperCase()} caption to clipboard!`, 'content_copy');
        }).catch(() => {
          // Fallback copy
          showToast(`Copied caption!`, 'content_copy');
        });
      }
    });
  }
  
  if (btnEdit) {
    btnEdit.addEventListener('click', () => {
      openCaptionEditor(state.activeResultPlatform);
    });
  }
  
  if (btnUpscale) {
    btnUpscale.addEventListener('click', () => {
      openUpscaleTool();
    });
  }
  
  if (btnShare) {
    btnShare.addEventListener('click', () => {
      openShareModal();
    });
  }
}

function switchResultPlatform(platform) {
  state.activeResultPlatform = platform;
  
  // Update Tab pills visual state
  document.querySelectorAll('.platform-result-tab').forEach(tab => {
    const p = tab.getAttribute('data-platform-tab');
    if (p === platform) {
      tab.className = 'platform-result-tab px-4 py-2 rounded-full bg-primary text-on-primary font-label-caps text-label-caps shadow-[0px_4px_12px_rgba(70,72,212,0.25)] transition-all flex items-center gap-1.5 active:scale-95';
    } else {
      tab.className = 'platform-result-tab px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors font-label-caps text-label-caps flex items-center gap-1.5 active:scale-95';
    }
  });
  
  // Update Preview Cards visibility
  const previewCards = document.querySelectorAll('.post-preview-format-container');
  previewCards.forEach(c => c.classList.add('hidden'));
  
  const targetCard = document.getElementById(`preview-format-${platform}`);
  if (targetCard) {
    targetCard.classList.remove('hidden');
  }
  
  renderCurrentPlatformPost(platform);
}

function renderResultsDashboard() {
  // Sync tab visibility with user selected platforms
  document.querySelectorAll('.platform-result-tab').forEach(tab => {
    const p = tab.getAttribute('data-platform-tab');
    if (state.selectedPlatforms[p]) {
      tab.style.display = 'inline-flex';
    } else {
      tab.style.display = 'none';
    }
  });
  
  // Switch to current active platform
  switchResultPlatform(state.activeResultPlatform);
}

function renderCurrentPlatformPost(platform) {
  const post = state.posts[platform];
  if (!post) return;
  const media = state.currentMedia;
  const isVideo = media.type === 'video';
  
  if (platform === 'linkedin') {
    const textEl = document.getElementById('linkedin-post-text');
    const mediaEl = document.getElementById('linkedin-post-media');
    if (textEl) textEl.textContent = post.caption;
    if (mediaEl) renderMediaAttachment(mediaEl, media, 'aspect-[4/3]');
    
    // Like button
    const likeBtn = document.getElementById('btn-linkedin-like');
    if (likeBtn) {
      likeBtn.onclick = () => toggleLike('linkedin', likeBtn);
    }
  } else if (platform === 'instagram') {
    const captionEl = document.getElementById('instagram-post-caption');
    const mediaEl = document.getElementById('instagram-post-media');
    const likesEl = document.getElementById('instagram-likes-count');
    
    if (captionEl) {
      captionEl.innerHTML = `<span class="font-semibold mr-1.5 text-on-surface">sarah.jenkins_</span>${post.caption.replace(/\n/g, '<br>')}`;
    }
    if (mediaEl) renderMediaAttachment(mediaEl, media, isVideo ? 'aspect-[9/16] max-h-[420px]' : 'aspect-square');
    if (likesEl) likesEl.textContent = `${state.likes.instagram.toLocaleString()} likes`;
    
    const heartBtn = document.getElementById('btn-instagram-heart');
    if (heartBtn) {
      heartBtn.onclick = () => toggleLike('instagram', heartBtn);
    }
  } else if (platform === 'x') {
    const textEl = document.getElementById('x-post-text');
    const mediaEl = document.getElementById('x-post-media');
    if (textEl) textEl.innerHTML = post.caption.replace(/\n/g, '<br>');
    if (mediaEl) renderMediaAttachment(mediaEl, media, 'aspect-video');
    
    const likeBtn = document.getElementById('btn-x-like');
    if (likeBtn) {
      likeBtn.onclick = () => toggleLike('x', likeBtn);
    }
  } else if (platform === 'reddit') {
    const titleEl = document.getElementById('reddit-post-title');
    const textEl = document.getElementById('reddit-post-text');
    const mediaEl = document.getElementById('reddit-post-media');
    const scoreEl = document.getElementById('reddit-score-count');
    
    if (titleEl) titleEl.textContent = post.title;
    if (textEl) textEl.innerHTML = post.caption.replace(/\n/g, '<br>');
    if (mediaEl) renderMediaAttachment(mediaEl, media, 'aspect-[16/10] max-h-[300px]');
    if (scoreEl) scoreEl.textContent = state.likes.reddit;
    
    const upvoteBtn = document.getElementById('btn-reddit-upvote');
    if (upvoteBtn) {
      upvoteBtn.onclick = () => toggleLike('reddit', upvoteBtn);
    }
  }
}

function renderMediaAttachment(container, media, aspectClass) {
  container.className = `w-full rounded-[18px] overflow-hidden bg-surface-container-high relative ${aspectClass}`;
  
  if (media.type === 'video' && media.videoSrc) {
    container.innerHTML = `
      <video src="${media.videoSrc}" poster="${media.url}" class="w-full h-full object-cover" controls playsinline></video>
      <div class="absolute top-3 right-3 bg-black/50 backdrop-blur-md rounded-full px-2.5 py-1 text-white font-label-caps text-[10px] flex items-center gap-1 pointer-events-none">
        <span class="material-symbols-outlined text-xs fill-icon">movie</span> 4K Reel
      </div>
    `;
  } else {
    container.innerHTML = `
      <img src="${media.url}" alt="${media.title}" class="w-full h-full object-cover select-none">
      ${media.type === 'video' ? `
        <div class="absolute inset-0 flex items-center justify-center bg-black/25">
          <div class="w-12 h-12 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-primary shadow-lg">
            <span class="material-symbols-outlined text-2xl fill-icon ml-0.5">play_arrow</span>
          </div>
        </div>
      ` : ''}
    `;
  }
}

function toggleLike(platform, btn) {
  state.userLiked[platform] = !state.userLiked[platform];
  const isLiked = state.userLiked[platform];
  
  if (platform === 'instagram') {
    state.likes.instagram += isLiked ? 1 : -1;
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) {
      if (isLiked) {
        icon.classList.add('heart-popped', 'fill-icon');
        icon.textContent = 'favorite';
      } else {
        icon.classList.remove('heart-popped', 'fill-icon');
        icon.textContent = 'favorite_border';
      }
    }
    const likesEl = document.getElementById('instagram-likes-count');
    if (likesEl) likesEl.textContent = `${state.likes.instagram.toLocaleString()} likes`;
  } else if (platform === 'linkedin') {
    state.likes.linkedin += isLiked ? 1 : -1;
    const countEl = document.getElementById('linkedin-like-count');
    if (countEl) countEl.textContent = state.likes.linkedin;
    btn.classList.toggle('text-primary', isLiked);
  } else if (platform === 'x') {
    state.likes.x += isLiked ? 1 : -1;
    const countEl = document.getElementById('x-like-count');
    if (countEl) countEl.textContent = state.likes.x;
    btn.classList.toggle('text-rose-500', isLiked);
  } else if (platform === 'reddit') {
    state.likes.reddit += isLiked ? 1 : -1;
    const scoreEl = document.getElementById('reddit-score-count');
    if (scoreEl) scoreEl.textContent = state.likes.reddit;
    btn.classList.toggle('text-[#FF4500]', isLiked);
  }
}

// ----------------------------------------------------
// Screen 4: AI Caption Editor Logic
// ----------------------------------------------------
function initCaptionEditor() {
  const textarea = document.getElementById('editor-caption-textarea');
  const counterEl = document.getElementById('editor-char-counter');
  const btnApply = document.getElementById('btn-editor-apply');
  const btnCancel = document.getElementById('btn-editor-cancel');
  const customPromptInput = document.getElementById('editor-custom-prompt');
  const btnCustomGenerate = document.getElementById('btn-editor-custom-generate');
  
  if (textarea && counterEl) {
    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      counterEl.textContent = `${len} / 2200`;
      state.editorCurrentText = textarea.value;
    });
  }
  
  // Tone Buttons
  document.querySelectorAll('.editor-tone-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tone = btn.getAttribute('data-tone');
      applyToneToEditor(tone);
      
      document.querySelectorAll('.editor-tone-btn').forEach(b => {
        b.className = 'editor-tone-btn px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps active:scale-95 transition-all hover:bg-surface-variant';
      });
      btn.className = 'editor-tone-btn px-4 py-2 rounded-full bg-primary text-on-primary font-label-caps text-label-caps active:scale-95 transition-all shadow-sm';
    });
  });
  
  // AI Action Bento Buttons
  document.querySelectorAll('[data-ai-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-ai-action');
      applyAIAction(action);
    });
  });
  
  // Custom prompt re-writer
  if (btnCustomGenerate && customPromptInput && textarea) {
    btnCustomGenerate.addEventListener('click', () => {
      const prompt = customPromptInput.value.trim();
      if (!prompt) return;
      
      showToast('Generating AI rewrite...', 'auto_awesome');
      setTimeout(() => {
        let rewritten = textarea.value;
        if (prompt.toLowerCase().includes('casual') || prompt.toLowerCase().includes('gen z')) {
          rewritten = `ngl this new studio setup is actually unreal 🔥\n\nNo clutter, pure vibes and instant cross-posting. What do we think fam? 🚀✨\n\n#CreatorFlow #VibeCheck`;
        } else if (prompt.toLowerCase().includes('bullet') || prompt.toLowerCase().includes('summary')) {
          rewritten = `Executive Summary:\n• Launched redesigned CreatorFlow Studio interface\n• 3x faster multi-platform optimization\n• Built for modern visual creators\n\nThoughts & feedback appreciated! 👇`;
        } else {
          rewritten = `Refined with "${prompt}":\n\n` + textarea.value + `\n\n#CreatorStudio #Innovation`;
        }
        
        textarea.value = rewritten;
        textarea.dispatchEvent(new Event('input'));
        showToast('Caption updated from prompt!', 'magic_button');
      }, 500);
    });
  }
  
  if (btnApply) {
    btnApply.addEventListener('click', () => {
      if (state.posts[state.editorPlatform]) {
        state.posts[state.editorPlatform].caption = textarea.value;
        renderCurrentPlatformPost(state.editorPlatform);
        showToast(`Saved changes to ${state.editorPlatform.toUpperCase()} post`, 'check');
      }
      navigateBack();
    });
  }
  
  if (btnCancel) {
    btnCancel.addEventListener('click', () => {
      navigateBack();
    });
  }
}

function openCaptionEditor(platform) {
  state.editorPlatform = platform;
  const post = state.posts[platform];
  if (!post) return;
  
  state.editorOriginalText = post.caption;
  state.editorCurrentText = post.caption;
  
  const textarea = document.getElementById('editor-caption-textarea');
  const counterEl = document.getElementById('editor-char-counter');
  const titleEl = document.getElementById('editor-screen-title');
  
  if (titleEl) {
    titleEl.textContent = `Edit ${platform.toUpperCase()} Caption`;
  }
  
  if (textarea && counterEl) {
    textarea.value = post.caption;
    counterEl.textContent = `${post.caption.length} / 2200`;
  }
  
  navigateTo('screen-caption-editor');
}

function applyToneToEditor(tone) {
  state.editorTone = tone;
  const textarea = document.getElementById('editor-caption-textarea');
  if (!textarea) return;
  
  const original = state.editorCurrentText;
  let newText = original;
  
  if (tone === 'Professional') {
    newText = `We are pleased to announce our latest milestone in digital workflow design. 📈\n\nKey Strategic Pillars:\n1. Frictionless cross-platform distribution\n2. High-precision visual aesthetics\n3. Creator-first usability\n\nWe invite our professional community to share feedback below.`;
  } else if (tone === 'Witty') {
    newText = `Nobody: ...\nAbsolutely nobody: ...\nUs: Rebuilding the entire social studio from scratch because the pixels weren't glassmorphic enough. 🤷‍♂️✨\n\nWorth it though. What’s your biggest creator pet peeve? Drop it below 👇`;
  } else if (tone === 'Hype') {
    newText = `BOOM! 💥 The brand new CreatorFlow Studio is officially LIVE! 🚀⚡\n\nWe poured our hearts into this one. Instant 4-platform formatting, 4K reel support, and insane AI presets.\n\nDrop a 🔥 if you're ready to level up your content game!`;
  } else if (tone === 'Minimal') {
    newText = `Less clutter. More signal.\n\nIntroducing the all-new CreatorFlow Studio. Built for makers.\n\n#Minimalist #Design #CreatorFlow`;
  } else if (tone === 'Storyteller') {
    newText = `Three months ago, we hit a wall with our creator workflow. Juggling four apps for four platforms felt broken.\n\nSo we went back to the drawing board with a single goal: build a studio that feels as light as a social app, yet powerful enough for pro creators.\n\nHere’s what we discovered along the way... 🧵`;
  }
  
  textarea.value = newText;
  textarea.dispatchEvent(new Event('input'));
  showToast(`Applied ${tone} tone!`, 'auto_awesome');
}

function applyAIAction(action) {
  const textarea = document.getElementById('editor-caption-textarea');
  if (!textarea) return;
  
  let current = textarea.value;
  
  if (action === 'shorten') {
    const lines = current.split('\n').filter(l => l.trim().length > 0);
    textarea.value = lines.slice(0, Math.min(3, lines.length)).join('\n\n') + '\n\n#CreatorFlow';
    showToast('Shortened caption by 40%', 'short_text');
  } else if (action === 'emojis') {
    textarea.value = current
      .replace(/launch/gi, 'launch 🚀')
      .replace(/design/gi, 'design 🎨')
      .replace(/video/gi, 'video 🎬')
      .replace(/clean/gi, 'clean ✨')
      .replace(/workflow/gi, 'workflow ⚡');
    showToast('Added smart emojis!', 'add_reaction');
  } else if (action === 'punchy') {
    textarea.value = `Stop wasting hours formatting posts manually. ⚡\n\n` + current.replace(/Just wrapped up.*?\n/i, '') + `\n\nAct now or get left behind 👇`;
    showToast('Made post punchier!', 'bolt');
  } else if (action === 'alternatives') {
    const altOptions = [
      `Level up your social game with the new CreatorFlow Studio 🚀 Clean, fast, and optimized for LinkedIn, IG, X, and Reddit.`,
      `Why format 4 times when you can format once? ⚡ Built for creators who value their time.`,
      `Glassmorphic UI meets automated social distribution. Welcome to the future of content creation ✨`
    ];
    const chosen = altOptions[Math.floor(Math.random() * altOptions.length)];
    textarea.value = chosen;
    showToast('Generated alternative caption!', 'magic_button');
  }
  
  textarea.dispatchEvent(new Event('input'));
}

// ----------------------------------------------------
// Screen 5: AI Photo Upscale & Enhancer Logic
// ----------------------------------------------------
function initUpscaleScreen() {
  const slider = document.getElementById('compare-slider');
  const beforeContainer = document.getElementById('before-image-container');
  const afterContainer = document.getElementById('after-image-container');
  const sliderLine = document.getElementById('slider-line');
  const sliderHandle = document.getElementById('slider-handle');
  const btnUpscaleAction = document.getElementById('btn-run-upscale-process');
  const btnSaveUpscale = document.getElementById('btn-save-upscale-draft');
  
  // Slider input
  if (slider && beforeContainer && afterContainer && sliderLine && sliderHandle) {
    const updateSlider = (val) => {
      state.upscaleSliderPos = val;
      beforeContainer.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
      afterContainer.style.clipPath = `polygon(${val}% 0, 100% 0, 100% 100%, ${val}% 100%)`;
      sliderLine.style.left = `${val}%`;
      sliderHandle.style.left = `${val}%`;
    };
    
    slider.addEventListener('input', (e) => updateSlider(e.target.value));
  }
  
  // Upscale Factor selection
  document.querySelectorAll('.upscale-factor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const factor = btn.getAttribute('data-factor');
      if (factor === '8x') {
        showToast('8x Ultra is unlocked in CreatorFlow Pro 👑', 'lock');
        return;
      }
      state.upscaleFactor = factor;
      
      document.querySelectorAll('.upscale-factor-btn').forEach(b => {
        b.className = 'upscale-factor-btn flex flex-col items-center justify-center gap-1 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest hover:bg-surface-variant transition-colors active:scale-95';
        const num = b.querySelector('.factor-num');
        if (num) num.className = 'factor-num font-headline-md text-headline-md text-on-surface';
      });
      
      btn.className = 'upscale-factor-btn flex flex-col items-center justify-center gap-1 py-3 rounded-xl border-2 border-primary bg-primary/5 text-primary hover:bg-primary/10 transition-colors active:scale-95 shadow-[0_0_15px_rgba(70,72,212,0.15)] relative overflow-hidden';
      const num = btn.querySelector('.factor-num');
      if (num) num.className = 'factor-num font-headline-md text-headline-md text-primary';
      
      showToast(`Selected ${factor} Upscaling`, 'aspect_ratio');
    });
  });
  
  // Enhancement mode checkboxes
  document.querySelectorAll('.upscale-filter-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const filterKey = cb.getAttribute('data-filter');
      state.upscaleFilters[filterKey] = cb.checked;
      const label = cb.closest('label');
      if (label) {
        if (cb.checked) {
          label.classList.add('border-primary', 'bg-primary/10', 'text-primary');
          label.classList.remove('border-outline-variant', 'bg-surface-container-lowest', 'text-on-surface');
        } else {
          label.classList.remove('border-primary', 'bg-primary/10', 'text-primary');
          label.classList.add('border-outline-variant', 'bg-surface-container-lowest', 'text-on-surface');
        }
      }
    });
  });
  
  // Process Upscale Simulation
  if (btnUpscaleAction) {
    btnUpscaleAction.addEventListener('click', () => {
      btnUpscaleAction.disabled = true;
      btnUpscaleAction.innerHTML = `
        <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>Upscaling (${state.upscaleFactor})...</span>
      `;
      
      setTimeout(() => {
        btnUpscaleAction.disabled = false;
        btnUpscaleAction.innerHTML = `
          <span class="material-symbols-outlined fill-icon" data-icon="auto_awesome">auto_awesome</span>
          <span>Upscale Complete!</span>
        `;
        
        // Enhance after image visual sharpness
        const afterImg = document.getElementById('after-img-el');
        if (afterImg) {
          afterImg.style.filter = 'contrast(1.08) brightness(1.03) saturate(1.1)';
        }
        
        showToast(`AI Upscale to ${state.upscaleFactor} complete!`, 'auto_awesome');
        
        setTimeout(() => {
          btnUpscaleAction.innerHTML = `
            <span class="material-symbols-outlined fill-icon" data-icon="auto_awesome">auto_awesome</span>
            <span>Upscale Image</span>
          `;
        }, 2000);
      }, 1200);
    });
  }
  
  if (btnSaveUpscale) {
    btnSaveUpscale.addEventListener('click', () => {
      showToast('Enhanced image applied to all posts!', 'check_circle');
      navigateBack();
    });
  }
}

function openUpscaleTool() {
  const media = state.currentMedia;
  const beforeImg = document.getElementById('before-img-el');
  const afterImg = document.getElementById('after-img-el');
  const origDimEl = document.getElementById('upscale-orig-dim');
  
  const bgImg = media.enhancedUrl || media.url;
  if (beforeImg) beforeImg.style.backgroundImage = `url('${media.url}')`;
  if (afterImg) afterImg.style.backgroundImage = `url('${bgImg}')`;
  if (origDimEl) origDimEl.textContent = `Original: ${media.size}`;
  
  navigateTo('screen-upscale');
}

// ----------------------------------------------------
// Screen 6: Drafts and Profile Logic
// ----------------------------------------------------
function initDraftsAndProfile() {
  renderDraftsList();
  
  // Quick draft save from results
  const saveDraftBtn = document.getElementById('btn-results-save-draft');
  if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
      const activeP = state.activeResultPlatform;
      const post = state.posts[activeP];
      if (post) {
        state.drafts.unshift({
          id: 'draft-' + Date.now(),
          platform: activeP,
          title: post.title || `${activeP.toUpperCase()} Post Draft`,
          mediaName: state.currentMedia.name,
          mediaUrl: state.currentMedia.url,
          caption: post.caption.slice(0, 100) + '...',
          date: 'Just now'
        });
        renderDraftsList();
        showToast(`Saved ${activeP.toUpperCase()} post to Drafts!`, 'bookmark_added');
      }
    });
  }
  
  // Profile switches
  const themeToggle = document.getElementById('profile-dark-mode-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('change', (e) => {
      document.documentElement.classList.toggle('dark', e.target.checked);
      showToast(`Switched to ${e.target.checked ? 'Dark' : 'Light'} theme`, 'palette');
    });
  }
}

function renderDraftsList() {
  const container = document.getElementById('drafts-list-container');
  if (!container) return;
  
  if (state.drafts.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-on-surface-variant">
        <span class="material-symbols-outlined text-4xl mb-2 opacity-50">drafts</span>
        <p class="font-body-md">No saved drafts yet.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = state.drafts.map(d => {
    let badgeColor = '#0A66C2';
    if (d.platform === 'instagram') badgeColor = '#ee2a7b';
    if (d.platform === 'x') badgeColor = '#111827';
    if (d.platform === 'reddit') badgeColor = '#FF4500';
    
    return `
      <div class="bg-surface-container-lowest rounded-2xl p-4 shadow-[0px_10px_30px_rgba(15,23,42,0.04)] border border-surface-variant flex gap-3 items-center">
        <div class="w-16 h-16 rounded-xl bg-cover bg-center shrink-0 border border-black/5" style="background-image: url('${d.mediaUrl}')"></div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="font-label-caps text-[10px] px-2 py-0.5 rounded-full text-white uppercase font-bold" style="background-color: ${badgeColor};">${d.platform}</span>
            <span class="font-body-md text-xs text-on-surface-variant">${d.date}</span>
          </div>
          <h4 class="font-headline-sm text-sm font-semibold text-on-surface truncate">${d.title}</h4>
          <p class="font-body-md text-xs text-on-surface-variant truncate">${d.caption}</p>
        </div>
        <button class="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary active:scale-95 transition-transform shrink-0" onclick="loadDraft('${d.id}')">
          <span class="material-symbols-outlined text-lg">edit</span>
        </button>
      </div>
    `;
  }).join('');
}

window.loadDraft = function(draftId) {
  const draft = state.drafts.find(d => d.id === draftId);
  if (draft) {
    state.activeResultPlatform = draft.platform;
    renderResultsDashboard();
    navigateTo('screen-results');
    showToast(`Loaded draft for ${draft.platform.toUpperCase()}`, 'edit_note');
  }
};

// ----------------------------------------------------
// Share Modal Helper
// ----------------------------------------------------
function openShareModal() {
  const modal = document.getElementById('share-sheet-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

window.closeShareModal = function() {
  const modal = document.getElementById('share-sheet-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.executePlatformShare = function(platform) {
  closeShareModal();
  showToast(`Exporting asset & publishing to ${platform.toUpperCase()}...`, 'send');
  setTimeout(() => {
    showToast(`Successfully queued for ${platform.toUpperCase()}! 🚀`, 'check_circle');
  }, 1200);
};

// ----------------------------------------------------
// Desktop Frame Switcher
// ----------------------------------------------------
function initFrameSwitcher() {
  const toggleBtn = document.getElementById('btn-toggle-frame-mode');
  const wrapper = document.querySelector('.app-viewport-wrapper');
  
  if (toggleBtn && wrapper) {
    toggleBtn.addEventListener('click', () => {
      state.isMobileFramed = !state.isMobileFramed;
      wrapper.classList.toggle('framed-mode', state.isMobileFramed);
      const icon = toggleBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = state.isMobileFramed ? 'smartphone' : 'fullscreen';
      }
      showToast(state.isMobileFramed ? 'Mobile Phone Frame View' : 'Fluid Fullscreen View', 'devices');
    });
    
    // Set default framed mode on desktop
    wrapper.classList.add('framed-mode');
  }
}
