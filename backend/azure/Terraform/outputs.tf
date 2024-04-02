output "function_app_default_hostname" {
  description = "The default hostname associated with the function app."
  value       = azurerm_function_app.example.default_hostname
}