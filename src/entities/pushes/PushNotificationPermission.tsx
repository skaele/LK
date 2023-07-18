import { useEffect, useState } from 'react'

const usePushNotifications = () => {
    const [permission, setPermission] = useState<NotificationPermission>('default')
    const [subscription, setSubscription] = useState<PushSubscription | null>(null)

    useEffect(() => {
        Notification.requestPermission().then((permission) => {
            setPermission(permission)
            if (permission === 'granted') {
                // new Notification('Example Title', {
                //     body: 'Example description',
                // })
            }
        })

        const subscribeToPushNotifications = async () => {
            const registration = await navigator.serviceWorker.ready
            const subscription = await registration.pushManager.subscribe({
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
