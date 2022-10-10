// title & participants
const group = await sock.groupCreate("My Fab Group", ["1234@s.whatsapp.net", "4564@s.whatsapp.net"])
console.log ("created group with id: " + group.gid)
sock.sendMessage(group.id, { text: 'hello there' }) // say hello to everyone on the group

// id & people to add to the group (will throw error if it fails)
const response = await sock.groupParticipantsUpdate(
    "abcd-xyz@g.us", 
    ["abcd@s.whatsapp.net", "efgh@s.whatsapp.net"],
    "add" // replace this parameter with "remove", "demote" or "promote"
)

await sock.groupUpdateSubject("abcd-xyz@g.us", "New Subject!")

await sock.groupUpdateDescription("abcd-xyz@g.us", "New Description!")
