// us-history-i-topics.js

const usHistoryITopics = [
  {
    title: "Colonial America (1500–1776)",
    content: `
      <div class="section">
        <div class="section-title">Overview</div>
        <p>Colonial America refers to the period from the early 1500s through 1776, during which European powers—especially the British—established settlements along the eastern coast of North America. These colonies developed distinct regional identities shaped by geography, economic systems, religion, and interactions with Native American societies. This era laid the foundations of American political and cultural life, culminating in calls for independence.</p>
      </div>

      <div class="section">
        <div class="section-title">Key Events and Concepts</div>

        <h3>Settlement Patterns and Regional Differences</h3>
        <p>New England colonies emphasized religious communities and self-governance; the Middle Colonies developed around trade and cultural diversity; and the Southern Colonies relied heavily on plantation agriculture and enslaved labor. These patterns defined early political and economic systems in the Americas.</p>

        <h3>Relations with Native Americans</h3>
        <p>Colonists often formed alliances or engaged in conflict with Native tribes. Over time, pressure on land and resources led to increasing tension, dispossession, and violence.</p>

        <h3>Colonial Government and Self-Rule</h3>
        <p>While still subject to British authority, many colonies developed elected assemblies and local institutions, fostering a tradition of participatory government that influenced the revolutionary period.</p>
      </div>

      <div class="section">
        <div class="section-title">Quick Tip</div>
        <p>Understand how geography, economy, and religion shaped the development of regional colonial identities and their future political alignments.</p>
      </div>

      <div class="section">
        <div class="section-title">Recommended Books</div>
        <ul>
          <li><a href="https://www.amazon.com/dp/0809016326?tag=college4les0a-20" target="_blank">A People’s History of the American Revolution by Ray Raphael</a></li>
          <li><a href="https://www.amazon.com/dp/0679728747?tag=college4les0a-20" target="_blank">Albion’s Seed: Four British Folkways in America by David Hackett Fischer</a></li>
        </ul>
        <p style="font-size: 0.9em; color: #555;"><em>As an Amazon Associate, College4Less earns from qualifying purchases.</em></p>
      </div>
    `
  }
];

function generateTopicList(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  usHistoryITopics.forEach((topic) => {
    const section = document.createElement("section");
    section.innerHTML = topic.content;
    container.appendChild(section);
  });
}

// Usage: Call this function in your HTML file with the appropriate container ID
// Example: generateTopicList("us-history-i-topic-container");
