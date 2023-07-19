import { useEffect, useState } from 'react'

const usePushNotifications = () => {
    const [permission, setPermission] = useState<NotificationPermission>('default')
    const [subscription, setSubscription] = useState<PushSubscription | null>(null)

    useEffect(() => {
        Notification.requestPermission().then((permission) => {
            setPermission(permission)
        })

        const subscribeToPushNotifications = async () => {
            const sw = await navigator.serviceWorker.ready
            const subscription = await sw.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: '<InsertKey>',
            })
            setSubscription(subscription)

            // Send the subscription data to your server for storage
        }

        if (permission === 'granted' && !subscription) {
            subscribeToPushNotifications()
        }
    }, [permission, subscription])
}

export default usePushNotifications
