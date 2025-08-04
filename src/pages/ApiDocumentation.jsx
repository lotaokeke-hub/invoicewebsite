import React, { useState, useEffect } from 'react';
import { Code, Zap, Monitor, CheckCircle, Copy, ArrowRight, FileText } from 'lucide-react';
import './ApiDocumentation.css';

const ApiDocumentation = () => {
  const [activeTab, setActiveTab] = useState('JavaScript');
  const [copySuccess, setCopySuccess] = useState(false);

  const codeExamples = {
    'JavaScript': `// Create a new invoice
const createInvoice = async (invoiceData) => {
  const response = await fetch('https://api.nairainvoice.com/v1/invoices', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: invoiceData.amount,
      currency: 'NGN',
      description: invoiceData.description,
      customer_email: invoiceData.email,
      due_date: invoiceData.dueDate
    })
  });

  const invoice = await response.json();

  if (response.ok) {
    console.log('Invoice created:', invoice.data);
    return invoice.data;
  } else {
    console.error('Error creating invoice:', invoice.message);
    throw new Error(invoice.message);
  }
};`,
    'Python': `import requests
import json

def create_invoice(invoice_data):
    url = "https://api.nairainvoice.com/v1/invoices"

    headers = {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    }

    payload = {
        "amount": invoice_data["amount"],
        "currency": "NGN",
        "description": invoice_data["description"],
        "customer_email": invoice_data["email"],
        "due_date": invoice_data["due_date"]
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code == 200:
        invoice = response.json()
        print("Invoice created:", invoice["data"])
        return invoice["data"]
    else:
        error = response.json()
        print("Error creating invoice:", error["message"])
        raise Exception(error["message"])`,
    'PHP': `<?php

function createInvoice($invoiceData) {
    $url = 'https://api.nairainvoice.com/v1/invoices';

    $headers = [
        'Authorization: Bearer YOUR_API_KEY',
        'Content-Type: application/json'
    ];

    $payload = [
        'amount' => $invoiceData['amount'],
        'currency' => 'NGN',
        'description' => $invoiceData['description'],
        'customer_email' => $invoiceData['email'],
        'due_date' => $invoiceData['due_date']
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $invoice = json_decode($response, true);

    if ($httpCode === 200) {
        echo "Invoice created: " . print_r($invoice['data'], true);
        return $invoice['data'];
    } else {
        echo "Error creating invoice: " . $invoice['message'];
        throw new Exception($invoice['message']);
    }
}

?>`,
    'cURL': `curl -X POST https://api.nairainvoice.com/v1/invoices \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 10000,
    "currency": "NGN",
    "description": "Payment for services",
    "customer_email": "customer@example.com",
    "due_date": "2024-12-31"
  }'

# Example Response:
# {
#   "status": "success",
#   "data": {
#     "id": "inv_123456789",
#     "amount": 10000,
#     "currency": "NGN",
#     "description": "Payment for services",
#     "customer_email": "customer@example.com",
#     "due_date": "2024-12-31",
#     "status": "pending",
#     "created_at": "2024-08-02T10:30:00Z"
#   }
# }`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeTab]);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="api-documentation">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Code size={20} />
              <span>API Documentation</span>
            </div>
            <h1 className="hero-title">Developer Resources</h1>
            <p className="hero-description">
              Integrate Naira Invoice seamlessly into your application with our comprehensive APIs.
              Get started in minutes with our easy-to-use endpoints and detailed documentation.
            </p>
          </div>
        </div>
      </section>

      {/* API Sections */}
      <section className="api-sections" id="main-content">
        <div className="container">
          <div className="section-grid">
            {/* Quickstart Section */}
            <div className="api-card" id="quickstart">
              <div className="card-header">
                <div className="card-icon">
                  <Zap size={32} />
                </div>
                <div className="card-content">
                  <h2 className="card-title">Quickstart</h2>
                  <p className="card-description">
                    Understand the integration journey before you commence. Get up and running with Naira Invoice APIs in just a few simple steps.
                  </p>

                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>Create your developer account in minutes</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>Get your API keys and test credentials</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>Make your first API call</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>Test in sandbox environment</span>
                    </div>
                  </div>

                  <div className="card-actions">
                    <a href="#" className="btn-primary">
                      <span>Start Integration</span>
                      <ArrowRight size={16} />
                    </a>
                    <a href="/quickstart" className="btn-secondary">
                      <FileText size={16} />
                      <span>View Guide</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* API Basics Section */}
            <div className="api-card" id="api-basics">
              <div className="card-header">
                <div className="card-icon">
                  <Monitor size={32} />
                </div>
                <div className="card-content">
                  <h2 className="card-title">API Basics</h2>
                  <p className="card-description">
                    Learn the fundamental concepts, authentication methods, and core endpoints that power the Naira Invoice platform.
                  </p>

                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>RESTful API architecture</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>Bearer token authentication</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>JSON request and response format</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>Comprehensive error handling</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">
                        <CheckCircle size={12} />
                      </div>
                      <span>Rate limiting and best practices</span>
                    </div>
                  </div>

                  <div className="card-actions">
                    <a href="#" className="btn-primary">
                      <span>Explore API</span>
                      <ArrowRight size={16} />
                    </a>
                    <a href="#" className="btn-secondary">
                      <CheckCircle size={16} />
                      <span>Test API</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="code-examples" id="examples">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Code size={20} />
              <span>Code Examples</span>
            </div>
            <h2 className="section-title">Ready-to-Use Examples</h2>
            <p className="section-subtitle">
              Copy and paste these examples to get started quickly with common integration patterns
            </p>
          </div>

          <div className="code-tabs">
            {Object.keys(codeExamples).map((language) => (
              <div
                key={language}
                className={`code-tab ${activeTab === language ? 'active' : ''}`}
                onClick={() => setActiveTab(language)}
              >
                {language}
              </div>
            ))}
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="code-language">{activeTab}</span>
              <button className="copy-btn" onClick={copyToClipboard}>
                {copySuccess ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre><code>{codeExamples[activeTab]}</code></pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocumentation;