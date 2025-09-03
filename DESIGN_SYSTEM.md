# TrackMyShuttle Design System

## 🎨 Color Palette

### Primary Colors
- **Primary 50-950**: Blue color scale for main brand elements
- **Usage**: Buttons, links, active states, primary actions

### Secondary Colors
- **Secondary 50-950**: Purple color scale for secondary elements
- **Usage**: Accents, highlights, secondary actions

### Accent Colors
- **Accent 50-950**: Orange color scale for attention-grabbing elements
- **Usage**: CTAs, warnings, highlights

### Neutral Colors
- **Neutral 50-950**: Gray scale for text and backgrounds
- **Usage**: Text, borders, backgrounds, subtle elements

### Semantic Colors
- **Success 50-950**: Green scale for positive actions
- **Warning 50-950**: Yellow scale for caution
- **Error 50-950**: Red scale for errors and destructive actions

## 📏 Typography

### Font Sizes
- **xs**: 0.75rem (12px) - Small labels, captions
- **sm**: 0.875rem (14px) - Body text, small buttons
- **base**: 1rem (16px) - Default body text
- **lg**: 1.125rem (18px) - Large body text
- **xl**: 1.25rem (20px) - Subheadings
- **2xl**: 1.5rem (24px) - Section headings
- **3xl**: 1.875rem (30px) - Page headings
- **4xl**: 2.25rem (36px) - Large headings
- **5xl**: 3rem (48px) - Hero headings
- **6xl**: 3.75rem (60px) - Large hero headings
- **7xl**: 4.5rem (72px) - Extra large headings

### Custom Sizes
- **10-96**: Additional custom sizes for specific use cases

## 📱 Responsive Breakpoints

- **xs**: 475px - Extra small devices
- **sm**: 640px - Small devices
- **md**: 768px - Medium devices
- **lg**: 1024px - Large devices
- **xl**: 1280px - Extra large devices
- **2xl**: 1536px - 2X large devices
- **3xl**: 1920px - 3X large devices
- **4xl**: 2560px - 4X large devices

## 🎭 Shadows

- **soft**: Subtle shadow for cards and containers
- **medium**: Medium shadow for elevated elements
- **strong**: Strong shadow for prominent elements
- **glow**: Glowing shadow for interactive elements
- **glow-lg**: Large glowing shadow
- **glow-xl**: Extra large glowing shadow

## 🎬 Animations

### Built-in Animations
- **fade-in**: Simple fade in effect
- **fade-in-up**: Fade in from bottom
- **fade-in-down**: Fade in from top
- **slide-in-left**: Slide in from left
- **slide-in-right**: Slide in from right
- **bounce-in**: Bouncy entrance effect
- **scale-in**: Scale in effect
- **pulse-slow**: Slow pulsing animation

### Custom Durations
- **duration-400**: 400ms transitions
- **duration-600**: 600ms transitions
- **duration-800**: 800ms transitions
- **duration-1000**: 1000ms transitions

## 🏗️ Component Architecture

### Pages
- **Home**: Landing page with search functionality
- **Platform**: Platform features overview
- **About**: Company information and mission

### Components
- **Navbar**: Navigation with dropdown menus
- **Routing**: React Router setup for navigation

## 📁 File Structure

```
src/
├── components/           # Reusable UI components
│   ├── index.js         # Component exports
│   └── Navbar.jsx       # Navigation component
├── pages/               # Page components
│   ├── index.js         # Page exports
│   ├── Home.jsx         # Home page
│   ├── Platform.jsx     # Platform page
│   └── About.jsx        # About page
├── App.jsx              # Main app with routing
├── main.jsx             # App entry point
└── index.css            # Global styles + custom CSS
```

## 🚀 Usage Examples

### Colors
```jsx
// Primary button
<button className="bg-primary-600 hover:bg-primary-700 text-white">
  Click me
</button>

// Secondary text
<p className="text-secondary-600">Secondary information</p>

// Success state
<div className="bg-success-50 text-success-800">Success message</div>
```

### Typography
```jsx
// Large heading
<h1 className="text-6xl font-bold text-neutral-800">
  Main Title
</h1>

// Body text
<p className="text-lg text-neutral-600 leading-relaxed">
  Body content
</p>
```

### Shadows
```jsx
// Card with soft shadow
<div className="bg-white rounded-2xl p-8 shadow-soft">
  Card content
</div>

// Button with glow effect
<button className="shadow-glow hover:shadow-glow-lg">
  Glowing button
</button>
```

### Animations
```jsx
// Fade in animation
<div className="animate-fade-in-up">
  Animated content
</div>

// Hover effects
<button className="transition-all duration-400 hover:scale-105">
  Hover me
</button>
```

## 🔧 Customization

All design tokens are defined in `tailwind.config.js` and can be easily modified:
- Colors: Update hex values in the colors section
- Spacing: Add custom spacing values
- Breakpoints: Modify responsive breakpoints
- Shadows: Customize shadow definitions
- Animations: Add new keyframes and animations

## 📱 Responsive Design

Use the responsive prefixes for different screen sizes:
- `sm:` - Small devices and up
- `md:` - Medium devices and up
- `lg:` - Large devices and up
- `xl:` - Extra large devices and up

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```
