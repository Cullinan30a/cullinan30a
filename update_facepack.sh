#!/bin/bash

echo "🔧 Auto-updating facepack.html with ChatGPT integration..."

# Backup original file
cp facepack.html facepack_backup.html
echo "✅ Backup created: facepack_backup.html"

# Find the line number where to insert the ChatGPT section
line_num=$(grep -n "<!-- Activity Log -->" facepack.html | cut -d: -f1)

if [ -z "$line_num" ]; then
    echo "❌ Could not find insertion point"
    exit 1
fi

# Calculate insertion point (before Activity Log section)
insert_line=$((line_num - 1))

# Create the ChatGPT section
cat << 'CHATGPT_SECTION' > /tmp/chatgpt_section.html

        <!-- ChatGPT Integration Section -->
        <section class="bg-white rounded-2xl shadow-sm border p-6">
            <h2 class="text-lg font-semibold mb-4">🤖 ChatGPT FacePack Assistant</h2>
            
            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium mb-1">FacePack Person ID</label>
                    <input id="chatgptPersonId" 
                           class="w-full border rounded-xl px-3 py-2" 
                           placeholder="e.g., person001, john-doe"
                           value="">
                    <p class="text-xs text-slate-500 mt-1">Unique identifier for this person</p>
                </div>
                
                <div>
                    <label class="block text-sm font-medium mb-1">Upload Source</label>
                    <select id="uploadSource" class="w-full border rounded-xl px-3 py-2">
                        <option value="chatgpt">🤖 ChatGPT Assistant</option>
                        <option value="manual">👤 Manual Upload</option>
                        <option value="api">🔗 API Integration</option>
                    </select>
                </div>
            </div>

            <div class="mt-4">
                <label class="block text-sm font-medium mb-1">Person Attributes (JSON)</label>
                <textarea id="personAttributes" 
                          class="w-full border rounded-xl px-3 py-2 h-32" 
                          placeholder='{"name": "John Doe", "age": 30, "role": "Developer", "skills": ["JavaScript", "Python"], "notes": "Active team member"}'></textarea>
                <p class="text-xs text-slate-500 mt-1">JSON format with person details that will update the FaceSheet</p>
            </div>

            <div class="flex gap-2 mt-4">
                <button onclick="processChatGPTUpload()" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    🚀 Process ChatGPT Upload
                </button>
                <button onclick="validatePersonData()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    ✅ Validate Data
                </button>
                <button onclick="previewFaceSheet()" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    ��️ Preview Sheet
                </button>
                <button onclick="loadChatGPTDemo()" class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    📝 Load Demo Data
                </button>
            </div>

            <div id="chatgptStatus" class="mt-4 p-3 rounded-lg bg-gray-50 text-sm text-gray-600">
                💡 Ready to process ChatGPT uploads with automatic FaceSheet integration
            </div>
        </section>

CHATGPT_SECTION

# Insert the section into the file
head -n $insert_line facepack.html > /tmp/facepack_part1.html
cat /tmp/chatgpt_section.html >> /tmp/facepack_part1.html
tail -n +$((insert_line + 1)) facepack.html >> /tmp/facepack_part1.html

# Replace original file
mv /tmp/facepack_part1.html facepack.html

echo "✅ ChatGPT section added to facepack.html"

# Now add the JavaScript functions before the closing </script> tag
echo "🔧 Adding ChatGPT JavaScript functions..."

# Find the last </script> tag
script_end=$(grep -n "</script>" facepack.html | tail -1 | cut -d: -f1)

if [ -z "$script_end" ]; then
    echo "❌ Could not find script closing tag"
    exit 1
fi

# Insert JavaScript functions before the last </script>
head -n $((script_end - 1)) facepack.html > /tmp/facepack_with_js.html

cat << 'JS_FUNCTIONS' >> /tmp/facepack_with_js.html

        // ChatGPT Integration Functions
        function processChatGPTUpload() {
            const personId = document.getElementById('chatgptPersonId').value.trim();
            const attributes = document.getElementById('personAttributes').value.trim();
            const source = document.getElementById('uploadSource').value;
            
            if (!personId) {
                updateChatGPTStatus('❌ Please enter a Person ID', 'error');
                return;
            }
            
            if (!attributes) {
                updateChatGPTStatus('❌ Please enter person attributes', 'error');
                return;
            }
            
            try {
                const parsedAttributes = JSON.parse(attributes);
                updateChatGPTStatus('🔄 Processing ChatGPT upload...', 'processing');
                
                const facePackData = {
                    personId: personId,
                    source: source,
                    timestamp: new Date().toISOString(),
                    attributes: parsedAttributes,
                    folderId: config.folderId || '1hNf41iyyozx8DJC0aAj8wjDX6xMT8LPy',
                    uploadedBy: 'ChatGPT Assistant'
                };
                
                uploadToFaceSheet(facePackData);
                
            } catch (error) {
                updateChatGPTStatus('❌ Invalid JSON format in attributes', 'error');
                console.error('JSON parsing error:', error);
            }
        }

        function uploadToFaceSheet(data) {
            const baseUrl = config.baseUrl;
            const passcode = config.passcode;
            
            if (!baseUrl || !passcode) {
                updateChatGPTStatus('❌ Please configure Base URL and Passcode first', 'error');
                return;
            }
            
            const payload = {
                action: 'addPerson',
                personId: data.personId,
                data: {
                    name: data.attributes.name || data.personId,
                    age: data.attributes.age || '',
                    role: data.attributes.role || '',
                    skills: JSON.stringify(data.attributes.skills || []),
                    notes: data.attributes.notes || '',
                    uploadSource: data.source,
                    uploadTimestamp: data.timestamp,
                    folderId: data.folderId
                },
                passcode: passcode,
                sheetId: config.sheetId,
                sheetName: config.sheetName || 'Facesheet'
            };
            
            updateChatGPTStatus('📡 Sending data to Google Sheet...', 'processing');
            
            fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    updateChatGPTStatus(`✅ Successfully added ${data.personId} to FaceSheet!`, 'success');
                    logActivity('ChatGPT Upload', 'SUCCESS - ' + data.personId);
                    
                    document.getElementById('chatgptPersonId').value = '';
                    document.getElementById('personAttributes').value = '';
                } else {
                    updateChatGPTStatus(`❌ Upload failed: ${result.error}`, 'error');
                    logActivity('ChatGPT Upload', 'ERROR - ' + result.error);
                }
            })
            .catch(error => {
                updateChatGPTStatus('❌ Network error during upload', 'error');
                logActivity('ChatGPT Upload', 'NETWORK ERROR');
            });
        }

        function validatePersonData() {
            const attributes = document.getElementById('personAttributes').value.trim();
            
            if (!attributes) {
                updateChatGPTStatus('❌ No data to validate', 'error');
                return;
            }
            
            try {
                const parsed = JSON.parse(attributes);
                let validation = '✅ JSON Valid\n\n';
                
                if (parsed.name) validation += `✅ name: ${parsed.name}\n`;
                else validation += `⚠️ name: Missing (recommended)\n`;
                
                if (parsed.age) validation += `➕ age: ${parsed.age}\n`;
                if (parsed.role) validation += `➕ role: ${parsed.role}\n`;
                if (parsed.skills) validation += `➕ skills: ${JSON.stringify(parsed.skills)}\n`;
                if (parsed.notes) validation += `➕ notes: ${parsed.notes}\n`;
                
                updateChatGPTStatus(validation, 'success');
                
            } catch (error) {
                updateChatGPTStatus('❌ Invalid JSON format', 'error');
            }
        }

        function previewFaceSheet() {
            const personId = document.getElementById('chatgptPersonId').value.trim();
            const attributes = document.getElementById('personAttributes').value.trim();
            
            if (!personId || !attributes) {
                updateChatGPTStatus('❌ Please fill in Person ID and Attributes', 'error');
                return;
            }
            
            try {
                const parsed = JSON.parse(attributes);
                
                let preview = `📋 FaceSheet Preview for: ${personId}\n\n`;
                preview += `👤 Name: ${parsed.name || personId}\n`;
                preview += `🎂 Age: ${parsed.age || 'Not specified'}\n`;
                preview += `💼 Role: ${parsed.role || 'Not specified'}\n`;
                preview += `🛠️ Skills: ${JSON.stringify(parsed.skills || [])}\n`;
                preview += `📝 Notes: ${parsed.notes || 'None'}\n`;
                preview += `📁 Folder: ${config.folderId || '1hNf41iyyozx8DJC0aAj8wjDX6xMT8LPy'}\n`;
                preview += `⏰ Will be uploaded: ${new Date().toLocaleString()}`;
                
                updateChatGPTStatus(preview, 'info');
                
            } catch (error) {
                updateChatGPTStatus('❌ Cannot preview - Invalid JSON', 'error');
            }
        }

        function loadChatGPTDemo() {
            document.getElementById('chatgptPersonId').value = 'demo-person-001';
            document.getElementById('personAttributes').value = JSON.stringify({
                name: "Alice Johnson",
                age: 28,
                role: "Frontend Developer",
                skills: ["React", "TypeScript", "UI/UX Design"],
                notes: "Team lead for the authentication project"
            }, null, 2);
            
            updateChatGPTStatus('📝 Demo data loaded - ready for testing!', 'info');
        }

        function updateChatGPTStatus(message, type = 'info') {
            const statusEl = document.getElementById('chatgptStatus');
            
            const colors = {
                success: 'bg-green-50 text-green-700 border border-green-200',
                error: 'bg-red-50 text-red-700 border border-red-200',
                processing: 'bg-blue-50 text-blue-700 border border-blue-200',
                info: 'bg-gray-50 text-gray-700 border border-gray-200'
            };
            
            statusEl.className = `mt-4 p-3 rounded-lg text-sm whitespace-pre-line ${colors[type] || colors.info}`;
            statusEl.textContent = message;
        }

JS_FUNCTIONS

tail -n +$script_end facepack.html >> /tmp/facepack_with_js.html

# Replace the file
mv /tmp/facepack_with_js.html facepack.html

echo "✅ JavaScript functions added"

# Update the default base URL to Google Drive
sed -i '' 's/placeholder="https:\/\/script.google.com\/macros\/s\/YOUR_ID\/exec"/value="https:\/\/drive.google.com\/drive\/u\/2\/folders\/1hNf41iyyozx8DJC0aAj8wjDX6xMT8LPy"/' facepack.html

echo "✅ Default base URL updated to Google Drive folder"

# Clean up temp files
rm -f /tmp/chatgpt_section.html

echo ""
echo "🎉 FacePack update complete!"
echo "📁 Backup saved as: facepack_backup.html"
echo "🚀 ChatGPT integration added with:"
echo "   • Person ID input"
echo "   • JSON attributes editor"
echo "   • Data validation"
echo "   • Google Drive integration"
echo "   • Demo data loader"
echo ""
echo "💡 Open facepack.html to see the new ChatGPT section!"

