# CIVCO Developer Portal  

The **CIVCO Developer Portal** will serve as the centralized development resource, streamlining collaboration between CIVCO and Software Partners for seamless API integration.  

---

## 🌐 Network and Connectivity  

- Only **local network/intranet** is required for communication between the Asset Tracking Server and ASTRA – **no internet** is needed.  
- The **device address** running the Asset Tracking Server will be defined by the **Tailscale-assigned IP address**.  
- The **API Client** must connect to **HTTPS port 443** to send requests.  
- **API connectivity** is enabled **only when a network connection is detected**.  
- **Privileged users** from the UI are allowed to **disable API connectivity** when a network connection is detected.  

### 🔄 If Asset Tracking and ASTRA Are on Different Networks:  
- **Hospital IT** must create a **route** between the API server and ASTRA.  

### 🔍 Connection Testing:  
- Connection testing to the Asset Tracking Server is **one-way**, meaning API requests can only be sent **from API to ASTRA**.  