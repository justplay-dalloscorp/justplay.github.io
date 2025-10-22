// JustPlay Version Update Script
// Run this with: node update-version.js

const fs = require('fs');
const path = require('path');

// Configuration
const CURRENT_VERSION = '1.0.0';
const NEW_VERSION = '1.0.1'; // Update this when you want to change version

// Files to update
const HTML_FILES = [
    'index.html',
    'services.html', 
    'about.html',
    'contact.html',
    'terms.html'
];

// Function to update version in a file
function updateVersionInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace CSS version
        content = content.replace(
            new RegExp(`href="assets/css/style.css\\?v=[^"]*"`, 'g'),
            `href="assets/css/style.css?v=${NEW_VERSION}"`
        );
        
        // Replace JS versions
        content = content.replace(
            new RegExp(`src="assets/js/[^"]*\\?v=[^"]*"`, 'g'),
            (match) => {
                return match.replace(/\?v=[^"]*/, `?v=${NEW_VERSION}`);
            }
        );
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated ${filePath}`);
        
    } catch (error) {
        console.error(`❌ Error updating ${filePath}:`, error.message);
    }
}

// Main function
function updateAllVersions() {
    console.log(`🔄 Updating from version ${CURRENT_VERSION} to ${NEW_VERSION}...`);
    
    HTML_FILES.forEach(file => {
        if (fs.existsSync(file)) {
            updateVersionInFile(file);
        } else {
            console.log(`⚠️  File not found: ${file}`);
        }
    });
    
    // Update version.txt
    try {
        let versionContent = fs.readFileSync('version.txt', 'utf8');
        versionContent = versionContent.replace(
            `Current Version: ${CURRENT_VERSION}`,
            `Current Version: ${NEW_VERSION}`
        );
        versionContent += `\n- ${NEW_VERSION} - ${new Date().toISOString().split('T')[0]} - Version update\n`;
        fs.writeFileSync('version.txt', versionContent, 'utf8');
        console.log('✅ Updated version.txt');
    } catch (error) {
        console.error('❌ Error updating version.txt:', error.message);
    }
    
    console.log(`🎉 Version update complete! All files updated to ${NEW_VERSION}`);
}

// Run the update
updateAllVersions();
