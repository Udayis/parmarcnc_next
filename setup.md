# Parmar CNC Website Setup Guide

## Project Organization

### 1. Directory Structure
```
parmarcnc-next/
├── public/
│   ├── images/            # All website images
│   └── files/            # PDFs and other downloadable files
│
└── src/
    ├── components/       # React components
    ├── Data_Folders/    # Component data
    └── font_styles/     # Global styles
```

### 2. Image Organization

All images are stored in the `public/images` directory. Here's a list of all images used in the project:

#### Event Images
- `expo-ahmedabad.jpg`
- `expo-bengaluru.jpg`
- `event_hero_img.png`
- `event_logo.png`

#### Product Images
- `product_img_1.webp`
- `Product_hero_img.png`
- `CNC_press_break.png`
- `CNC_PRESS_BRAKE_MACHINE_EDGE_SERIES.png`
- `CNC_PRESS_BRAKE_MACHINE_EDGE_H_SERIES.png`
- `Hydrolic_press_break_machine_img.png`
- `Sharing_machine_img.png`
- `Edge_machine.png`
- `Edge_H_series_machine_img.png`

#### Company Images
- `company_main_img.png`
- `vision_img.png`
- `why_us_img.png`
- `iso_logo.png`
- `certificate_logo.png`

#### Contact Images
- `contact_hero_img.png`
- `e_mail_logo.png`
- `call_number_logo.png`
- `enquries_house_img.png`
- `country_img_1.png`
- `country_img_2.png`
- `country_img_3.png`

#### Download Images
- `download_hero_img.png`
- `brouser_download_img.png`
- `pdf_icon.png`

### 3. Data Files

Each component has its corresponding data file in `src/Data_Folders/`:

1. **EventData.js**
   ```javascript
   export const eventData = [
     {
       id: 1,
       image: "/images/expo-ahmedabad.jpg",
       title: "Expo 2022 Ahmedabad",
       year: "2022",
       city: "Ahmedabad"
     },
     // ... more events
   ];
   ```

2. **ProductData.js**
   ```javascript
   export const productData = [
     {
       id: 1,
       image: "/images/product_img_1.webp",
       title: "Product Title",
       // ... more product details
     },
     // ... more products
   ];
   ```

3. **CompanyData.js**
   ```javascript
   export const companyData = {
     mainPart: {
       description: "...",
       image: "/images/company_main_img.png"
     },
     // ... more company data
   };
   ```

4. **ContactData.js**
   ```javascript
   export const contactPageData = {
     heroSection: {
       image: "/images/contact_hero_img.png",
       // ... more contact data
     },
     // ... more sections
   };
   ```

5. **Download.js**
   ```javascript
   export const downloadData = [
     {
       id: 1,
       image: "/images/brouser_download_img.png",
       // ... more download data
     },
     // ... more downloads
   ];
   ```

### 4. Component Structure

Each component follows this structure:
```
ComponentName/
├── ComponentName.js    # Main component
└── componentName.css   # Component styles
```

### 5. Adding New Content

1. **New Event**
   - Add image to `public/images`
   - Update `EventData.js`
   - Image path format: `/images/event-name.jpg`

2. **New Product**
   - Add image to `public/images`
   - Update `ProductData.js`
   - Image path format: `/images/product-name.png`

3. **New Download**
   - Add file to `public/files`
   - Add image to `public/images`
   - Update `Download.js`
   - File path format: `/files/document-name.pdf`

### 6. Maintenance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Optimize images before adding
   - Use appropriate formats (webp for photos, png for logos)

2. **Data Updates**
   - Keep data files organized
   - Use consistent naming conventions
   - Document any new fields added

3. **Component Updates**
   - Follow existing component patterns
   - Maintain responsive design
   - Keep animations consistent

### 7. Common Issues

1. **Image Not Loading**
   - Check path in data file
   - Verify image exists in `public/images`
   - Check image format

2. **Component Not Rendering**
   - Check data structure
   - Verify imports
   - Check console for errors

3. **Styling Issues**
   - Check CSS file path
   - Verify class names
   - Check media queries

### 8. Contact

For support or questions:
- Email: Export.parmarllp@gmail.com
- Phone: +9195108 22377 (Domestic)
- Phone: +9194272 54147 (International) 