# Images Folder

This folder contains all the images used in the TrackMyShuttle project.

## 📁 Folder Structure

```
src/assets/images/
├── index.js          # Image exports
├── README.md         # This file
├── logos/            # Logo images
├── icons/            # Icon images
├── backgrounds/      # Background images
├── hero/             # Hero section images
└── misc/             # Miscellaneous images
```

## 🖼️ Supported Image Formats

- **PNG**: For logos, icons, and images with transparency
- **JPG/JPEG**: For photographs and complex images
- **SVG**: For scalable icons and graphics
- **WebP**: For modern web-optimized images
- **GIF**: For simple animations

## 🚀 How to Use Images

### 1. Import Images

```jsx
// Import single image
import logo from '../assets/images/logo.png'
import heroImage from '../assets/images/hero/hero-bg.jpg'

// Import from index file (recommended)
import { logo, heroImage } from '../assets/images'
```

### 2. Use in Components

```jsx
// In JSX
<img src={logo} alt="TrackMyShuttle Logo" className="w-32 h-32" />

// As background image
<div 
  className="bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  Content here
</div>
```

### 3. Use in CSS

```css
.hero-section {
  background-image: url('../assets/images/hero/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

## 📱 Responsive Images

### Using srcset for different screen sizes

```jsx
<img
  src={heroImage}
  srcSet={`
    ${heroImageSmall} 480w,
    ${heroImageMedium} 800w,
    ${heroImageLarge} 1200w
  `}
  sizes="(max-width: 480px) 100vw, (max-width: 800px) 80vw, 60vw"
  alt="Hero Image"
  className="w-full h-auto"
/>
```

### Using Tailwind CSS responsive classes

```jsx
<img
  src={heroImage}
  alt="Hero Image"
  className="w-full h-32 sm:h-48 md:h-64 lg:h-96 object-cover"
/>
```

## 🎨 Image Optimization Tips

1. **Compress images** before adding to the project
2. **Use appropriate formats**: PNG for transparency, JPG for photos
3. **Optimize for web**: Keep file sizes reasonable
4. **Use descriptive filenames**: `hero-background.jpg` not `img1.jpg`
5. **Consider lazy loading** for images below the fold

## 🔧 Adding New Images

1. **Place your image** in the appropriate subfolder
2. **Update the index.js** file to export the new image
3. **Import and use** in your components

### Example: Adding a new logo

```jsx
// 1. Place logo.png in src/assets/images/logos/
// 2. Update src/assets/images/index.js:
export { default as newLogo } from './logos/logo.png'

// 3. Use in component:
import { newLogo } from '../assets/images'
<img src={newLogo} alt="New Logo" />
```

## 📐 Image Dimensions

Common image dimensions for different use cases:

- **Logo**: 200x200px to 400x400px
- **Hero Images**: 1920x1080px (16:9 ratio)
- **Icons**: 24x24px, 32x32px, 48x48px
- **Thumbnails**: 300x200px
- **Backgrounds**: 1920x1080px or larger

## 🎯 Best Practices

1. **Alt text**: Always provide meaningful alt text for accessibility
2. **Lazy loading**: Use lazy loading for images not immediately visible
3. **Responsive**: Provide different sizes for different screen resolutions
4. **Performance**: Optimize images for web use
5. **Naming**: Use descriptive, consistent naming conventions
