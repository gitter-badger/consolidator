export default function shouldBeRejected(message) {
  it(`should be rejected`, async function() {
    this.context.should.be.rejected()
  })
  it(`should be rejected with TypeError`, async function() {
    this.context.should.be.rejectedWith(TypeError)
  })
  it(`should be rejected with "${message}"`, async function() {
    this.context.should.be.rejectedWith(message)
  })
}
