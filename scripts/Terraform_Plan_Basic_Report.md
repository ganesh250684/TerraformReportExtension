# Terraform Plan Report (Basic)

**Generated:** 2025-11-21 01:11:35  
**Plan File:** d:\TerraformReportExtension\samples\planprod-output.txt

---

## Summary

| Metric | Count |
|--------|-------|
| Resources to Add | 0 |
| Resources to Change | 27 |
| Resources to Destroy | 1 |
| **Total Changes** | 0271 |

---

## Resource Changes

### 1. 🔄 UPDATED IN-PLACE - azurerm_application_gateway.network[0]

**Action:** updated in-place

**Resource Name:** `azurerm_application_gateway.network[0]`

**Changes:**
```
~ resource "azurerm_application_gateway" "network" {
- firewall_policy_id                = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGatewayWebApplicationFirewallPolicies/ge-prd-waf" -> null
~ force_firewall_policy_association = true -> false
- backend_address_pool {
- fqdns        = [
- "ge-prd-mobile-api-apps-sales.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-sales-agw-mobile-api-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-sales-agw-mobile-api-beap" -> null
- backend_address_pool {
- fqdns        = [
- "ge-prd-mobile-api-apps-salescc.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-salescc-agw-mobile-api-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-salescc-agw-mobile-api-beap" -> null
- backend_address_pool {
- fqdns        = [
- "ge-prd-service-api-apps-sales2.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-sales2-agw-service-api-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-sales2-agw-service-api-beap" -> null
- backend_address_pool {
- fqdns        = [
- "ge-prd-service-api-apps-salescc.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-salescc-agw-service-api-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-salescc-agw-service-api-beap" -> null
- backend_address_pool {
- fqdns        = [
- "ge-prd-std-rpt-apps-sales.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-sales-agw-std-rpt-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-sales-agw-std-rpt-beap" -> null
- backend_address_pool {
- fqdns        = [
- "ge-prd-std-rpt-apps-sales2.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-sales2-agw-std-rpt-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-sales2-agw-std-rpt-beap" -> null
- backend_address_pool {
- fqdns        = [
- "ge-prd-std-rpt-apps-salescc.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-salescc-agw-std-rpt-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-salescc-agw-std-rpt-beap" -> null
- backend_address_pool {
- fqdns        = [
- "ge-prd-web-app-apps-sales.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-sales-agw-web-app-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-sales-agw-web-app-beap" -> null
- backend_address_pool {
- fqdns        = [
- "ge-prd-web-app-apps-salescc.azurewebsites.net",
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-salescc-agw-web-app-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-salescc-agw-web-app-beap" -> null
- backend_address_pool {
- fqdns        = [] -> null
- id           = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-sales-agw-service-api-beap" -> null
- ip_addresses = [] -> null
- name         = "ge-prd-sales-agw-service-api-beap" -> null
- backend_http_settings {
- affinity_cookie_name                = "ApplicationGatewayAffinity" -> null
- cookie_based_affinity               = "Disabled" -> null
- id                                  = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-ssl-htst" -> null
- name                                = "ge-prd-agw-be-ssl-htst" -> null
- pick_host_name_from_backend_address = true -> null
- port                                = 443 -> null
- probe_id                            = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-web-app-probe" -> null
- probe_name                          = "ge-prd-agw-web-app-probe" -> null
- protocol                            = "Https" -> null
- request_timeout                     = 1200 -> null
- trusted_root_certificate_names      = [] -> null
- backend_http_settings {
- affinity_cookie_name                = "ApplicationGatewayAffinity" -> null
- cookie_based_affinity               = "Disabled" -> null
- host_name                           = "reports.gorillaexpense.info" -> null
- id                                  = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-adv-rpt-htst" -> null
- name                                = "ge-prd-agw-be-adv-rpt-htst" -> null
- pick_host_name_from_backend_address = false -> null
- port                                = 443 -> null
- probe_id                            = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-adv-rpt-vm-probe" -> null
- probe_name                          = "ge-prd-agw-adv-rpt-vm-probe" -> null
- protocol                            = "Https" -> null
- request_timeout                     = 60 -> null
- trusted_root_certificate_names      = [
- "Cloudflare",
- "cloudflare2",
+ backend_http_settings {
+ cookie_based_affinity               = "Disabled"
+ id                                  = (known after apply)
+ name                                = "ge-prd-agw-be-ssl-htst"
+ pick_host_name_from_backend_address = true
+ port                                = 443
+ probe_id                            = (known after apply)
+ probe_name                          = "ge-prd-agw-web-app-probe"
+ protocol                            = "Https"
+ request_timeout                     = 1200
+ trusted_root_certificate_names      = []
+ backend_http_settings {
+ cookie_based_affinity               = "Disabled"
+ host_name                           = "reports.gorillaexpense.info"
+ id                                  = (known after apply)
+ name                                = "ge-prd-agw-be-adv-rpt-htst"
+ pick_host_name_from_backend_address = false
+ port                                = 443
+ probe_id                            = (known after apply)
+ probe_name                          = "ge-prd-agw-adv-rpt-vm-probe"
+ protocol                            = "Https"
+ request_timeout                     = 60
+ trusted_root_certificate_names      = [
+ "Cloudflare",
+ "cloudflare2",
- probe {
- host                                      = "ge-prd-mobile-api-apps-preprodrelease.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-preprodrelease-agw-mobile-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-preprodrelease-agw-mobile-api-probe" -> null
- path                                      = "/preprodrelease/Mobile/service_mobile.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-mobile-api-apps-sales.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-sales-agw-mobile-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-sales-agw-mobile-api-probe" -> null
- path                                      = "/sales/Mobile/service_mobile.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-mobile-api-apps-sales2.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-sales2-agw-mobile-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-sales2-agw-mobile-api-probe" -> null
- path                                      = "/sales2/Mobile/service_mobile.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-mobile-api-apps-salescc.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-salescc-agw-mobile-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-salescc-agw-mobile-api-probe" -> null
- path                                      = "/salescc/Mobile/service_mobile.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-mobile-api-apps-staging.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-staging-agw-mobile-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-staging-agw-mobile-api-probe" -> null
- path                                      = "/staging/Mobile/service_mobile.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-mobile-api-apps.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-mobile-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-agw-mobile-api-probe" -> null
- path                                      = "/GorillaPro/mobile/service_mobile.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-receipt-proc-apps.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-receipt-proc-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-agw-receipt-proc-probe" -> null
- path                                      = "/GorillaPro/Service/service_expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-service-api-apps-preprodrelease.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-preprodrelease-agw-service-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-preprodrelease-agw-service-api-probe" -> null
- path                                      = "/preprodrelease/Service/Service_Expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-service-api-apps-sales.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-sales-agw-service-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-sales-agw-service-api-probe" -> null
- path                                      = "/sales/Service/Service_Expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-service-api-apps-sales2.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-sales2-agw-service-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-sales2-agw-service-api-probe" -> null
- path                                      = "/sales2/Service/Service_Expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-service-api-apps-salescc.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-salescc-agw-service-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-salescc-agw-service-api-probe" -> null
- path                                      = "/salescc/Service/Service_Expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-service-api-apps-staging.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-staging-agw-service-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-staging-agw-service-api-probe" -> null
- path                                      = "/staging/Service/Service_Expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-service-api-apps.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-service-api-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-agw-service-api-probe" -> null
- path                                      = "/GorillaPro/service/service_login.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-std-rpt-apps-preprodrelease.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-preprodrelease-agw-std-rpt-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-preprodrelease-agw-std-rpt-probe" -> null
- path                                      = "/preprodrelease/Service/service_expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-std-rpt-apps-sales.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-sales-agw-std-rpt-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-sales-agw-std-rpt-probe" -> null
- path                                      = "/sales/Service/service_expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-std-rpt-apps-sales2.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-sales2-agw-std-rpt-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-sales2-agw-std-rpt-probe" -> null
- path                                      = "/sales2/Service/service_expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-std-rpt-apps-salescc.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-salescc-agw-std-rpt-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-salescc-agw-std-rpt-probe" -> null
- path                                      = "/salescc/Service/service_expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-std-rpt-apps-staging.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-staging-agw-std-rpt-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-staging-agw-std-rpt-probe" -> null
- path                                      = "/staging/Service/service_expense.svc" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-std-rpt-apps.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-std-rpt-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-agw-std-rpt-probe" -> null
- path                                      = "/GorillaPro/std/report/logon" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-web-app-apps-preprodrelease.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-preprodrelease-agw-web-app-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-preprodrelease-agw-web-app-probe" -> null
- path                                      = "/preprodrelease/Web/User/Logon" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-web-app-apps-sales.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-sales-agw-web-app-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-sales-agw-web-app-probe" -> null
- path                                      = "/sales/Web/User/Logon" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-web-app-apps-sales2.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-sales2-agw-web-app-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-sales2-agw-web-app-probe" -> null
- path                                      = "/sales2/Web/User/Logon" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-web-app-apps-salescc.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-salescc-agw-web-app-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-salescc-agw-web-app-probe" -> null
- path                                      = "/salescc/Web/User/Logon" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-web-app-apps-staging.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-staging-agw-web-app-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-staging-agw-web-app-probe" -> null
- path                                      = "/staging/Web/User/Logon" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "ge-prd-web-app-apps.azurewebsites.net" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-web-app-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-agw-web-app-probe" -> null
- path                                      = "/GorillaPro/Web/User/LogOn" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
- probe {
- host                                      = "reports.gorillaexpense.info" -> null
- id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-adv-rpt-vm-probe" -> null
- interval                                  = 30 -> null
- minimum_servers                           = 0 -> null
- name                                      = "ge-prd-agw-adv-rpt-vm-probe" -> null
- path                                      = "/jasperserver-pro/login.html" -> null
- pick_host_name_from_backend_http_settings = false -> null
- port                                      = 0 -> null
- protocol                                  = "Https" -> null
- timeout                                   = 30 -> null
- unhealthy_threshold                       = 3 -> null
- match {
- status_code = [
- "200-499",
+ probe {
+ host                                      = "ge-prd-mobile-api-apps-preprodrelease.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-preprodrelease-agw-mobile-api-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-preprodrelease-agw-mobile-api-probe"
+ path                                      = "/preprodrelease/Mobile/service_mobile.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-mobile-api-apps-staging.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-staging-agw-mobile-api-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-staging-agw-mobile-api-probe"
+ path                                      = "/staging/Mobile/service_mobile.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-mobile-api-apps.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-mobile-api-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-agw-mobile-api-probe"
+ path                                      = "/GorillaPro/mobile/service_mobile.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-receipt-proc-apps.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-receipt-proc-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-agw-receipt-proc-probe"
+ path                                      = "/GorillaPro/Service/service_expense.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-service-api-apps-preprodrelease.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-preprodrelease-agw-service-api-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-preprodrelease-agw-service-api-probe"
+ path                                      = "/preprodrelease/Service/Service_Expense.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-service-api-apps-staging.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-staging-agw-service-api-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-staging-agw-service-api-probe"
+ path                                      = "/staging/Service/Service_Expense.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-service-api-apps.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-service-api-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-agw-service-api-probe"
+ path                                      = "/GorillaPro/service/service_login.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-std-rpt-apps-preprodrelease.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-preprodrelease-agw-std-rpt-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-preprodrelease-agw-std-rpt-probe"
+ path                                      = "/preprodrelease/Service/service_expense.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-std-rpt-apps-staging.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-staging-agw-std-rpt-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-staging-agw-std-rpt-probe"
+ path                                      = "/staging/Service/service_expense.svc"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-std-rpt-apps.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-std-rpt-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-agw-std-rpt-probe"
+ path                                      = "/GorillaPro/std/report/logon"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-web-app-apps-preprodrelease.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-preprodrelease-agw-web-app-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-preprodrelease-agw-web-app-probe"
+ path                                      = "/preprodrelease/Web/User/Logon"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-web-app-apps-staging.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-staging-agw-web-app-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-staging-agw-web-app-probe"
+ path                                      = "/staging/Web/User/Logon"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "ge-prd-web-app-apps.azurewebsites.net"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-web-app-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-agw-web-app-probe"
+ path                                      = "/GorillaPro/Web/User/LogOn"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
+ probe {
+ host                                      = "reports.gorillaexpense.info"
+ id                                        = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/probes/ge-prd-agw-adv-rpt-vm-probe"
+ interval                                  = 30
+ minimum_servers                           = 0
+ name                                      = "ge-prd-agw-adv-rpt-vm-probe"
+ path                                      = "/jasperserver-pro/login.html"
+ pick_host_name_from_backend_http_settings = false
+ protocol                                  = "Https"
+ timeout                                   = 30
+ unhealthy_threshold                       = 3
+ match {
+ status_code = [
+ "200-499",
~ ssl_policy {
~ policy_name          = "AppGwSslPolicy20220101" -> "AppGwSslPolicy20220101S"
~ trusted_root_certificate {
~ data                = (sensitive value)
~ trusted_root_certificate {
~ data                = (sensitive value)
~ url_path_map {
~ path_rule {
~ backend_address_pool_name   = "ge-prd-sales-agw-service-api-beap" -> "ge-prd-staging-agw-service-api-beap"
~ name                        = "service-api-sales" -> "service-api-staging"
~ paths                       = [
~ "/sales/service/*" -> "/staging/service/*",
~ path_rule {
~ backend_address_pool_name   = "ge-prd-sales2-agw-service-api-beap" -> "ge-prd-preprodrelease-agw-std-rpt-beap"
~ name                        = "service-api-sales2" -> "std-rpt-preprodrelease"
~ paths                       = [
~ "/sales2/service/*" -> "/preprodrelease/std/*",
~ path_rule {
~ backend_address_pool_name   = "ge-prd-salescc-agw-service-api-beap" -> "ge-prd-staging-agw-std-rpt-beap"
~ name                        = "service-api-salescc" -> "std-rpt-staging"
~ paths                       = [
~ "/salescc/service/*" -> "/staging/std/*",
~ path_rule {
~ backend_address_pool_name   = "ge-prd-staging-agw-service-api-beap" -> "ge-prd-agw-adv-rpt-vm-beap"
~ backend_http_settings_name  = "ge-prd-agw-be-ssl-htst" -> "ge-prd-agw-be-adv-rpt-htst"
~ name                        = "service-api-staging" -> "adv-rpt-vm"
~ paths                       = [
~ "/staging/service/*" -> "/jasperserver-pro/*",
~ path_rule {
~ backend_address_pool_name   = "ge-prd-preprodrelease-agw-std-rpt-beap" -> "ge-prd-agw-receipt-proc-beap"
~ name                        = "std-rpt-preprodrelease" -> "receipt-proc"
~ paths                       = [
~ "/preprodrelease/std/*" -> "/GorillaPro/receipt/*",
- path_rule {
- backend_address_pool_id     = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-sales-agw-std-rpt-beap" -> null
- backend_address_pool_name   = "ge-prd-sales-agw-std-rpt-beap" -> null
- backend_http_settings_id    = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-ssl-htst" -> null
- backend_http_settings_name  = "ge-prd-agw-be-ssl-htst" -> null
- id                          = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/urlPathMaps/ge-prd-agw-path-map/pathRules/std-rpt-sales" -> null
- name                        = "std-rpt-sales" -> null
- paths                       = [
- "/sales/std/*",
- path_rule {
- backend_address_pool_id     = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-sales2-agw-std-rpt-beap" -> null
- backend_address_pool_name   = "ge-prd-sales2-agw-std-rpt-beap" -> null
- backend_http_settings_id    = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-ssl-htst" -> null
- backend_http_settings_name  = "ge-prd-agw-be-ssl-htst" -> null
- id                          = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/urlPathMaps/ge-prd-agw-path-map/pathRules/std-rpt-sales2" -> null
- name                        = "std-rpt-sales2" -> null
- paths                       = [
- "/sales2/std/*",
- path_rule {
- backend_address_pool_id     = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-salescc-agw-std-rpt-beap" -> null
- backend_address_pool_name   = "ge-prd-salescc-agw-std-rpt-beap" -> null
- backend_http_settings_id    = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-ssl-htst" -> null
- backend_http_settings_name  = "ge-prd-agw-be-ssl-htst" -> null
- id                          = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/urlPathMaps/ge-prd-agw-path-map/pathRules/std-rpt-salescc" -> null
- name                        = "std-rpt-salescc" -> null
- paths                       = [
- "/salescc/std/*",
- path_rule {
- backend_address_pool_id     = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-staging-agw-std-rpt-beap" -> null
- backend_address_pool_name   = "ge-prd-staging-agw-std-rpt-beap" -> null
- backend_http_settings_id    = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-ssl-htst" -> null
- backend_http_settings_name  = "ge-prd-agw-be-ssl-htst" -> null
- id                          = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/urlPathMaps/ge-prd-agw-path-map/pathRules/std-rpt-staging" -> null
- name                        = "std-rpt-staging" -> null
- paths                       = [
- "/staging/std/*",
- path_rule {
- backend_address_pool_id     = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-agw-adv-rpt-vm-beap" -> null
- backend_address_pool_name   = "ge-prd-agw-adv-rpt-vm-beap" -> null
- backend_http_settings_id    = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-adv-rpt-htst" -> null
- backend_http_settings_name  = "ge-prd-agw-be-adv-rpt-htst" -> null
- id                          = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/urlPathMaps/ge-prd-agw-path-map/pathRules/adv-rpt-vm" -> null
- name                        = "adv-rpt-vm" -> null
- paths                       = [
- "/jasperserver-pro/*",
- path_rule {
- backend_address_pool_id     = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-agw-receipt-proc-beap" -> null
- backend_address_pool_name   = "ge-prd-agw-receipt-proc-beap" -> null
- backend_http_settings_id    = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-ssl-htst" -> null
- backend_http_settings_name  = "ge-prd-agw-be-ssl-htst" -> null
- id                          = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/urlPathMaps/ge-prd-agw-path-map/pathRules/receipt-proc" -> null
- name                        = "receipt-proc" -> null
- paths                       = [
- "/GorillaPro/receipt/*",
- path_rule {
- backend_address_pool_id     = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendAddressPools/ge-prd-agw-web-app-beap" -> null
- backend_address_pool_name   = "ge-prd-agw-web-app-beap" -> null
- backend_http_settings_id    = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/backendHttpSettingsCollection/ge-prd-agw-be-ssl-htst" -> null
- backend_http_settings_name  = "ge-prd-agw-be-ssl-htst" -> null
- id                          = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGateways/ge-prd-agw/urlPathMaps/ge-prd-agw-path-map/pathRules/azure-marketplace" -> null
- name                        = "azure-marketplace" -> null
- paths                       = [
- "/GorillaPro/AzureMarketplace/*",
```

### 2. ❌ DESTROYED - azurerm_web_application_firewall_policy.waf[0]

**Action:** destroyed

**Resource Name:** `azurerm_web_application_firewall_policy.waf[0]`

**Changes:**
```
- resource "azurerm_web_application_firewall_policy" "waf" {
- http_listener_ids   = [] -> null
- id                  = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Network/applicationGatewayWebApplicationFirewallPolicies/ge-prd-waf" -> null
- location            = "eastus" -> null
- name                = "ge-prd-waf" -> null
- path_based_rule_ids = [] -> null
- resource_group_name = "ge-prd-rg" -> null
- tags                = {} -> null
- custom_rules {
- action               = "Allow" -> null
- enabled              = true -> null
- name                 = "AllowUNION" -> null
- priority             = 2 -> null
- rate_limit_threshold = 0 -> null
- rule_type            = "MatchRule" -> null
- match_conditions {
- match_values       = [
- "UNION",
- "GetSelectedHCPData",
- "Union",
- negation_condition = false -> null
- operator           = "Contains" -> null
- transforms         = [] -> null
- match_variables {
- variable_name = "QueryString" -> null
- managed_rules {
- managed_rule_set {
- type    = "OWASP" -> null
- version = "3.2" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "General" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "200002" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "200003" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "200004" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-911-METHOD-ENFORCEMENT" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "911100" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-913-SCANNER-DETECTION" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "913100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "913101" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "913102" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "913110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "913120" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-920-PROTOCOL-ENFORCEMENT" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920120" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920121" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920160" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920170" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920171" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920180" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920190" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920200" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920201" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920202" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920210" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920220" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "920230" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920240" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920250" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920260" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920270" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920271" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920272" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920273" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920274" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920280" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920290" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "920300" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920310" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920311" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "920320" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920330" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920340" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920341" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920350" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "920420" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920430" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920440" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920450" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920460" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "920470" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "920480" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-921-PROTOCOL-ATTACK" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921120" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921130" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921140" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921150" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921151" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921160" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921170" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "921180" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-930-APPLICATION-ATTACK-LFI" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "930100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "930110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "930120" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "930130" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-931-APPLICATION-ATTACK-RFI" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "931100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "931110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "931120" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "931130" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-932-APPLICATION-ATTACK-RCE" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932105" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932106" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932115" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932120" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932130" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932140" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932150" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932160" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932170" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932171" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932180" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "932190" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-933-APPLICATION-ATTACK-PHP" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933111" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933120" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933130" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933131" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933140" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933150" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933151" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933160" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933161" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933170" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933180" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933190" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933200" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "933210" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-941-APPLICATION-ATTACK-XSS" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941101" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941120" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941130" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941140" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941150" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941160" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941170" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941180" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941190" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941200" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941210" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941220" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941230" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941240" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941250" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941260" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941270" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941280" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941290" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941300" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941310" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941320" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941330" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941340" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941350" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "941360" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-942-APPLICATION-ATTACK-SQLI" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942120" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942130" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942140" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942150" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942160" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942170" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942180" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942190" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942200" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942210" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942220" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942230" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942240" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942250" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942251" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942260" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942270" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942280" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942290" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942300" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942310" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942320" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942330" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942340" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942350" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942360" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942361" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942370" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942380" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942390" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942400" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942410" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942420" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942421" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "942430" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942431" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942432" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "942440" -> null
- rule {
- action  = "Log" -> null
- enabled = true -> null
- id      = "942450" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942460" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942470" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942480" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942490" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "942500" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-943-APPLICATION-ATTACK-SESSION-FIXATION" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "943100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "943110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "943120" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "REQUEST-944-APPLICATION-ATTACK-JAVA" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "944100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "944110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "944120" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "944130" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "944200" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "944210" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "944240" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "944250" -> null
- rule_group_override {
- disabled_rules  = [] -> null
- rule_group_name = "Known-CVEs" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "800100" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "800110" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "800111" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "800112" -> null
- rule {
- action  = "Block" -> null
- enabled = true -> null
- id      = "800113" -> null
- managed_rule_set {
- type    = "Microsoft_BotManagerRuleSet" -> null
- version = "0.1" -> null
- policy_settings {
- enabled                                   = true -> null
- file_upload_limit_in_mb                   = 100 -> null
- js_challenge_cookie_expiration_in_minutes = 0 -> null
- max_request_body_size_in_kb               = 128 -> null
- mode                                      = "Prevention" -> null
- request_body_check                        = false -> null
- request_body_inspect_limit_in_kb          = 128 -> null
```

### 3. 🔄 UPDATED IN-PLACE - module.agw_subnet[0].azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.agw_subnet[0].azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 4. 🔄 UPDATED IN-PLACE - module.autofeed_cc.azurerm_windows_web_app.this

**Action:** updated in-place

**Resource Name:** `module.autofeed_cc.azurerm_windows_web_app.this`

**Changes:**
```
~ resource "azurerm_windows_web_app" "this" {
~ public_network_access_enabled                  = true -> false
~ site_config {
~ vnet_route_all_enabled                        = true -> false
```

### 5. 🔄 UPDATED IN-PLACE - module.autofeed_eml.azurerm_windows_web_app.this

**Action:** updated in-place

**Resource Name:** `module.autofeed_eml.azurerm_windows_web_app.this`

**Changes:**
```
~ resource "azurerm_windows_web_app" "this" {
~ public_network_access_enabled                  = true -> false
```

### 6. 🔄 UPDATED IN-PLACE - module.blob[0].azurerm_storage_account.blob

**Action:** updated in-place

**Resource Name:** `module.blob[0].azurerm_storage_account.blob`

**Changes:**
```
~ resource "azurerm_storage_account" "blob" {
~ public_network_access_enabled      = true -> false
```

### 7. 🔄 UPDATED IN-PLACE - module.cognitive_di_ds.azurerm_monitor_diagnostic_setting.this[0]

**Action:** updated in-place

**Resource Name:** `module.cognitive_di_ds.azurerm_monitor_diagnostic_setting.this[0]`

**Changes:**
```
~ resource "azurerm_monitor_diagnostic_setting" "this" {
- metric {
- category = "AllMetrics" -> null
- enabled  = false -> null
- retention_policy {
- days    = 0 -> null
- enabled = false -> null
```

### 8. 🔄 UPDATED IN-PLACE - module.dns_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.dns_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 9. 🔄 UPDATED IN-PLACE - module.gw_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.gw_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 10. 🔄 UPDATED IN-PLACE - module.kv_appconfig.azurerm_key_vault.this[0]

**Action:** updated in-place

**Resource Name:** `module.kv_appconfig.azurerm_key_vault.this[0]`

**Changes:**
```
~ resource "azurerm_key_vault" "this" {
~ public_network_access_enabled   = true -> false
```

### 11. 🔄 UPDATED IN-PLACE - module.kv_cde_secrets.azurerm_key_vault.this[0]

**Action:** updated in-place

**Resource Name:** `module.kv_cde_secrets.azurerm_key_vault.this[0]`

**Changes:**
```
~ resource "azurerm_key_vault" "this" {
~ public_network_access_enabled   = true -> false
```

### 12. 🔄 UPDATED IN-PLACE - module.kv_cert.azurerm_key_vault.this[0]

**Action:** updated in-place

**Resource Name:** `module.kv_cert.azurerm_key_vault.this[0]`

**Changes:**
```
~ resource "azurerm_key_vault" "this" {
~ access_policy                   = [
- {
- certificate_permissions = [
- "Get",
- "List",
- "Update",
- "Create",
- "Import",
- "Delete",
- "Recover",
- "Backup",
- "Restore",
- "ManageContacts",
- "ManageIssuers",
- "GetIssuers",
- "ListIssuers",
- "SetIssuers",
- "DeleteIssuers",
- "Purge",
- key_permissions         = [
- "Get",
- "List",
- "Update",
- "Create",
- "Import",
- "Delete",
- "Recover",
- "Backup",
- "Restore",
- "GetRotationPolicy",
- "SetRotationPolicy",
- "Rotate",
- "Encrypt",
- "Decrypt",
- "UnwrapKey",
- "WrapKey",
- "Verify",
- "Sign",
- "Purge",
- "Release",
- object_id               = "717b0f33-ccfd-438c-81b5-5c11a1666d4d"
- secret_permissions      = [
- "Get",
- "List",
- "Set",
- "Delete",
- "Recover",
- "Backup",
- "Restore",
- "Purge",
- storage_permissions     = []
- tenant_id               = "59acb64d-7f3d-4920-b40e-e3567a44d24e"
~ public_network_access_enabled   = true -> false
```

### 13. 🔄 UPDATED IN-PLACE - module.log_analytics_workspace.azurerm_log_analytics_workspace.this[0]

**Action:** updated in-place

**Resource Name:** `module.log_analytics_workspace.azurerm_log_analytics_workspace.this[0]`

**Changes:**
```
~ resource "azurerm_log_analytics_workspace" "this" {
~ retention_in_days                       = 365 -> 30
```

### 14. 🔄 UPDATED IN-PLACE - module.mobile_api.azurerm_windows_web_app.this

**Action:** updated in-place

**Resource Name:** `module.mobile_api.azurerm_windows_web_app.this`

**Changes:**
```
~ resource "azurerm_windows_web_app" "this" {
~ public_network_access_enabled                  = true -> false
```

### 15. 🔄 UPDATED IN-PLACE - module.redis_subnet[0].azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.redis_subnet[0].azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 16. 🔄 UPDATED IN-PLACE - module.sql_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.sql_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 17. 🔄 UPDATED IN-PLACE - module.std_rpt.azurerm_windows_web_app_slot.this_slots["staging"]

**Action:** updated in-place

**Resource Name:** `module.std_rpt.azurerm_windows_web_app_slot.this_slots["staging"]`

**Changes:**
```
~ resource "azurerm_windows_web_app_slot" "this_slots" {
~ identity {
~ type         = "UserAssigned" -> "SystemAssigned, UserAssigned"
```

### 18. 🔄 UPDATED IN-PLACE - module.web_app.azurerm_monitor_metric_alert.this[0]

**Action:** updated in-place

**Resource Name:** `module.web_app.azurerm_monitor_metric_alert.this[0]`

**Changes:**
```
~ resource "azurerm_monitor_metric_alert" "this" {
~ frequency                = "PT5M" -> "PT1M"
- action {
- action_group_id    = "/subscriptions/77BE4323-C969-4D87-B615-84B0D0BC4502/resourceGroups/ge-prd-rg/providers/microsoft.insights/actionGroups/action" -> null
- webhook_properties = {} -> null
- action {
- action_group_id    = "/subscriptions/77BE4323-C969-4D87-B615-84B0D0BC4502/resourceGroups/gorilla-apps-prod-resourcegroup/providers/microsoft.insights/actionGroups/gorilla-apps-prod-infra-critical-alert-notification-group" -> null
- webhook_properties = {} -> null
+ action {
+ action_group_id = "/subscriptions/77be4323-c969-4d87-b615-84b0d0bc4502/resourceGroups/ge-prd-rg/providers/Microsoft.Insights/actionGroups/action"
```

### 19. 🔄 UPDATED IN-PLACE - module.web_app.azurerm_windows_web_app.this

**Action:** updated in-place

**Resource Name:** `module.web_app.azurerm_windows_web_app.this`

**Changes:**
```
~ resource "azurerm_windows_web_app" "this" {
~ site_config {
- virtual_application {
- physical_path = "site\\wwwroot\\AzureMarketplace" -> null
- preload       = true -> null
- virtual_path  = "/GorillaPro/AzureMarketplace" -> null
- virtual_application {
- physical_path = "site\\wwwroot\\AzureMarketplace\\Web" -> null
- preload       = true -> null
- virtual_path  = "/GorillaPro/AzureMarketplace/Web" -> null
+ virtual_application {
+ physical_path = "site\\wwwroot\\GorillaExpense.Web"
+ preload       = false
+ virtual_path  = "/GorillaExpense.Web"
```

### 20. 🔄 UPDATED IN-PLACE - module.web_app.azurerm_windows_web_app_slot.this_slots["preprodrelease"]

**Action:** updated in-place

**Resource Name:** `module.web_app.azurerm_windows_web_app_slot.this_slots["preprodrelease"]`

**Changes:**
```
~ resource "azurerm_windows_web_app_slot" "this_slots" {
- connection_string {
- connection_string {
- connection_string {
- connection_string {
- connection_string {
- connection_string {
- connection_string {
- connection_string {
- connection_string {
- connection_string {
~ site_config {
+ virtual_application {
+ physical_path = "site\\wwwroot\\GorillaExpense.Web"
+ preload       = false
+ virtual_path  = "/GorillaExpense.Web"
```

### 21. 🔄 UPDATED IN-PLACE - module.web_app.azurerm_windows_web_app_slot.this_slots["staging"]

**Action:** updated in-place

**Resource Name:** `module.web_app.azurerm_windows_web_app_slot.this_slots["staging"]`

**Changes:**
```
~ resource "azurerm_windows_web_app_slot" "this_slots" {
~ site_config {
+ virtual_application {
+ physical_path = "site\\wwwroot\\GorillaExpense.Web"
+ preload       = false
+ virtual_path  = "/GorillaExpense.Web"
```

### 22. 🔄 UPDATED IN-PLACE - module.autofeed_cc.module.this_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.autofeed_cc.module.this_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
- "Microsoft.Web",
+ "Microsoft.KeyVault",
~ delegation {
~ name = "Microsoft.Web.serverFarms" -> "app-service-plan"
```

### 23. 🔄 UPDATED IN-PLACE - module.autofeed_eml.module.this_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.autofeed_eml.module.this_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 24. 🔄 UPDATED IN-PLACE - module.mobile_api.module.this_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.mobile_api.module.this_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 25. 🔄 UPDATED IN-PLACE - module.receipt_proc.module.this_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.receipt_proc.module.this_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 26. 🔄 UPDATED IN-PLACE - module.service_api.module.this_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.service_api.module.this_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 27. 🔄 UPDATED IN-PLACE - module.std_rpt.module.this_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.std_rpt.module.this_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
```

### 28. 🔄 UPDATED IN-PLACE - module.web_app.module.this_subnet.azurerm_subnet.this[0]

**Action:** updated in-place

**Resource Name:** `module.web_app.module.this_subnet.azurerm_subnet.this[0]`

**Changes:**
```
~ resource "azurerm_subnet" "this" {
~ service_endpoints                              = [
+ "Microsoft.KeyVault",
~ web_app_slotsslots = {
- sales          = {
- default_hostname = "ge-prd-web-app-apps-sales.azurewebsites.net"
- name             = "sales"
- sales2         = {
- default_hostname = "ge-prd-web-app-apps-sales2.azurewebsites.net"
- name             = "sales2"
- salescc        = {
- default_hostname = "ge-prd-web-app-apps-salescc.azurewebsites.net"
- name             = "salescc"
```

---

## Notes

This is a **basic report** generated by parsing Terraform plan output.

- ✅ Extracted resource names and actions
- ✅ Listed attribute changes
- ❌ No impact analysis
- ❌ No risk assessment
- ❌ No recommendations
- ❌ No dependency analysis

**For detailed analysis with AI:**
- Risk assessment
- Impact analysis
- Deployment recommendations
- Rollback procedures
- Testing checklists

Use the AI-enhanced version of this tool.

---

**Report Type:** Basic (No AI)  
**Parser Version:** 1.0  
**Generation Time:** 2025-11-21 01:11:35
