const medicalProblems = [
  {
    name: "Hypertension",
    description: "A condition in which the force of the blood against the artery walls is too high, often due to stress, diet, or genetics",
    treatment: "Lifestyle changes, medication such as ACE inhibitors, and regular monitoring",
  },
  {
      
    name: "Diabetes",
    description: "A chronic condition where the body either does not produce enough insulin (Type 1) or becomes resistant to insulin (Type 2), leading to high blood sugar levels. Long-term high blood sugar can cause serious complications like heart disease, nerve damage, and kidney problems.",
    treatment: "Management includes regular blood sugar monitoring, lifestyle changes such as a balanced diet and regular exercise, and medication. For Type 1 diabetes, insulin injections are necessary. For Type 2 diabetes, oral medications or insulin may be prescribed based on individual needs. Regular follow-ups with a healthcare provider are crucial for managing the condition and preventing complications."
        
  },
  {
    name: "Heart Disease",
    description: "A range of conditions that affect the heart, including coronary artery disease, heart attacks, and heart failure",
    treatment: "Lifestyle changes, medications, surgical procedures, and regular monitoring"
  },
 
  {
    name: "Stroke",
    description: "A medical emergency that occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients",
    treatment: "Emergency treatment with medications like tPA, surgical procedures, rehabilitation therapy"
  },
  {
    name: "Alzheimer's Disease",
    description: "A progressive disease that destroys memory and other important mental functions, primarily affecting older adults",
    treatment: "Medications to temporarily improve symptoms, supportive care, and cognitive therapy"
  },
  {
    name: "COPD Chronic Obstructive Pulmonary Disease",
    description: "A group of lung diseases that block airflow and make it difficult to breathe, often caused by smoking or exposure to irritating gases",
    treatment: "Inhalers, steroids, oxygen therapy, pulmonary rehabilitation, and lifestyle changes"
  },
  {
    name: "Osteoporosis",
    description: "A condition in which bones become weak and brittle due to loss of tissue, often as a result of hormonal changes or deficiency of calcium or vitamin D",
    treatment: "Medications, calcium and vitamin D supplements, weight-bearing exercise, and lifestyle changes"
  },
  {
    name: "Arthritis",
    description: "Inflammation of one or more joints, causing pain and stiffness that can worsen with age. Types include osteoarthritis and rheumatoid arthritis",
    treatment: "Medications, physical therapy, lifestyle changes, and in some cases, surgical procedures"
  },
  {
    name: "Asthma",
    description: "A condition in which your airways narrow and swell and may produce extra mucus, leading to difficulty breathing, coughing, and wheezing",
    treatment: "Inhalers, corticosteroids, avoiding triggers, and regular monitoring"
  },

  {
    name: "Cancer",
    description: "A disease in which abnormal cells divide uncontrollably and destroy body tissue",
    treatment: "Surgery, radiation therapy, chemotherapy, immunotherapy, and targeted therapy"
  },
  {
      name: "Fever",
      description: "An elevated body temperature often indicating an underlying infection or illness. Common causes include viral or bacterial infections",
      treatment: "Focus on rest and hydration. Over-the-counter medications like acetaminophen or ibuprofen can help manage fever. Seek medical advice if fever is prolonged or very high"
    },
    {
      name: "Cold",
      description: "A common viral infection of the upper respiratory tract, leading to symptoms such as a runny or stuffy nose, sore throat, and mild cough",
      treatment: "Rest and increased fluid intake are key. Use over-the-counter medications to alleviate symptoms like congestion and sore throat. Antibiotics are not suitable for viral colds"
    },
    {
      name: "Cough",
      description: "A reflex to clear the airways of mucus, irritants, or foreign particles. It can be caused by infections, allergies, or environmental factors",
      treatment: "Treatment depends on the cause; options include cough suppressants for dry coughs, expectorants for productive coughs, and avoiding irritants. Persistent or severe coughs should be evaluated by a doctor"
    },
    {
  name: "Throat Pain",
      description: "Pain or discomfort in the throat caused by infections such as pharyngitis or tonsillitis, or by irritants like smoke or dry air",
      treatment: "Gargling with warm salt water can soothe the throat, and staying hydrated helps. Over-the-counter lozenges or sprays may provide relief. Persistent pain should be assessed by a healthcare provider"
    }
];



  
  document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
  
    const userQuery = document.getElementById('userQuery').value.trim().toLowerCase();
    //const selectedLanguage = document.getElementById('language').value;
    const responseDiv = document.getElementById('response');
    const speakBtn = document.getElementById('speakBtn');
    responseDiv.innerHTML = '';
  
    let found = false;
    let responseText = '';
  
    for (let i = 0; i < medicalProblems.length; i++) {
      if (medicalProblems[i].name.toLowerCase() === userQuery) {
        responseText = `${medicalProblems[i].name}: ${medicalProblems[i].description}:$Treatment: ${medicalProblems[i].treatment}`;
        responseDiv.innerHTML = `<h2>${medicalProblems[i].name}</h2><p>${medicalProblems[i].description}</p><h2>Treatment:</h2><p>${medicalProblems[i].treatment}</p>`;
        found = true;
        break;
      }
    }
  
    if (!found) {
      responseText = `Sorry, we couldn't find any information on "${userQuery}".`;
      responseDiv.innerHTML = `<p>${responseText}</p>`;
    }
  
    if (responseText) {
      speakBtn.style.display = 'block';
      speakBtn.onclick = () => speak(responseText);
    } else {
      speakBtn.style.display = 'none';
    }
  });
  
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
