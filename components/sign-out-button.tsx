import { ThemedText } from '@/components/themed-text'
import { useClerk } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'

export const SignOutButton = () => {
 
  const { signOut } = useClerk()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      
      router.replace('/')
    } catch (err) {
     
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={handleSignOut}
    >
      <ThemedText style={styles.buttonText}>Sign out</ThemedText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})
