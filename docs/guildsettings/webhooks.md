---
icon: lucide/webhook
---

# Webhook settings    

You can use .fmbot webhooks to automatically post the featured music to your own channel.

To see more information about how featured works, [click here](../commands/featured.md).

!!! info cmd-slash "Using slash commands?"
    Webhooks are set up with text commands. Type `.addwebhook` in the channel you want featured posts in, or use `@.fmbot addwebhook` if your server uses a different prefix.

---   

### .addwebhook

Adds a webhook to the channel or thread you're in.

Requires the bot to have the 'Manage Webhooks' permission.

To change the channel simply change it in the server integration settings.

To remove the webhook simply delete it from your server integrations.

!!! note "Examples"
    `.addwebhook`

    
---   

### .testwebhook

Sends a test message through the webhook you've setup in your server. You can use this to check if you've set everything up correctly.

!!! note "Examples"
    `.testwebhook`

